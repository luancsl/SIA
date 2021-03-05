import { IClimateGateway } from "@src/data/gateway/climateGateway";
import { ClimateCapsule, Clime } from "@domain/entity";
import { DataFrame, IDataFrame } from 'data-forge';
import { getGlobalRadiation } from "@src/main/util";
import dayjs from 'dayjs';
import fetch from 'node-fetch';

export class NasaPowerProvider implements IClimateGateway {

    constructor() {

    }

    async getClimePeriod(lat: number, lng: number, startDate: string, endDate: string): Promise<ClimateCapsule> {

        const parameters = 'T2M,T2M_MAX,T2M_MIN,WS2M,RH2M,ALLSKY_TOA_SW_DWN,ALLSKY_SFC_SW_DWN';

        const dateDelay = dayjs().subtract(9, 'day');
        let startDateFormat: any = dayjs(startDate, 'YYYYMMDD');
        let endDateFormat: any = dayjs(endDate, 'YYYYMMDD');
        
        if (endDateFormat > dateDelay) {
            if (startDateFormat > dateDelay) {
                startDateFormat = dateDelay;
            }
            endDateFormat = dateDelay;
        }

        startDateFormat = startDateFormat.format('YYYYMMDD');
        endDateFormat = endDateFormat.format('YYYYMMDD');

        const url = `https://power.larc.nasa.gov/cgi-bin/v1/DataAccess.py?request=execute&identifier=SinglePoint&parameters=${parameters}&startDate=${startDateFormat}&endDate=${endDateFormat}&userCommunity=AG&tempAverage=DAILY&outputList=JSON,ASCII&lat=${lat}&lon=${lng}&user=anonymous`;

        return fetch(url).then(async body => {

            const result = await body.json();

            let dataFrame: IDataFrame = new DataFrame({
                columnNames: ['date', 'tMax', 'tMin', 'hum', 'windS', 'radQg', 'radQo']
            });
            const dates = Object.keys(result['features'][0]['properties']['parameter']['ALLSKY_SFC_SW_DWN']);
            const data = result['features'][0]['properties']['parameter'];
            const elevation = result['features'][0]['geometry']['coordinates'][2];

            for (const date of dates) {
                const radQg = data['ALLSKY_SFC_SW_DWN'][date] === -99 ? null : data['ALLSKY_SFC_SW_DWN'][date];
                const radQo = data['ALLSKY_TOA_SW_DWN'][date] === -99 ? getGlobalRadiation(dayjs(date, 'YYYYMMDD').month(), lat) : data['ALLSKY_TOA_SW_DWN'][date];
                const hum = data['RH2M'][date] === -99 ? null : data['RH2M'][date];
                const tmax = data['T2M_MAX'][date] === -99 ? null : data['T2M_MAX'][date];
                const tmin = data['T2M_MIN'][date] === -99 ? null : data['T2M_MIN'][date];
                const wind = data['WS2M'][date] === -99 ? null : data['WS2M'][date];

                dataFrame = dataFrame.appendPair([1, { date: date, tMax: tmax, tMin: tmin, hum: hum, windS: wind, radQg: radQg, radQo: radQo }]);
            }

            dataFrame = dataFrame.resetIndex();
            dataFrame = dataFrame.select(row => {
                const newRow = Object.assign({}, row);

                if (newRow['radQo'] && newRow['radQg'] > newRow['radQo']) {
                    newRow['radQg'] = parseFloat((newRow['radQo'] * .9).toFixed(2));
                }

                return newRow;
            })

            const dataFrameJson: Clime[] = JSON.parse(dataFrame.toJSON());

            const climateCapsule: ClimateCapsule = {
                startDate,
                endDate,
                lat,
                lng,
                service: 'nasaPower',
                elevation,
                climatesCSVFormat: dataFrame.toCSV(),
                climates: dataFrameJson
            }

            return climateCapsule;

        });

    }

}

/* const nasa = new NasaPowerProvider();

nasa.getClimePeriod(-15.789343, -47.925756, '20200801', '20200802').then(result => {
    console.log(result);
});
 */
