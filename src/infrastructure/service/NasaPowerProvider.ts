import { IClimateGateway } from "@src/data/gateway/climateGateway";
import { ClimateCapsule, Clime } from "@domain/entity";
import { DataFrame, IDataFrame } from 'data-forge';
import dayjs from 'dayjs';
import fetch from 'node-fetch';

export class NasaPowerProvider implements IClimateGateway {

    constructor() {

    }

    async getClimePeriod(lat: number, lng: number, startDate: string, endDate: string): Promise<ClimateCapsule> {

        const parameters = 'T2M,T2M_MAX,T2M_MIN,WS2M,RH2M,ALLSKY_TOA_SW_DWN,ALLSKY_SFC_SW_DWN';

        const nasaPowerStartDate = dayjs(startDate, 'YYYYMMDD').subtract(9, 'day').format('YYYYMMDD');
        const nasaPowerEndDate = dayjs(endDate, 'YYYYMMDD').subtract(9, 'day').format('YYYYMMDD');

        const url = `https://power.larc.nasa.gov/cgi-bin/v1/DataAccess.py?request=execute&identifier=SinglePoint&parameters=${parameters}&startDate=${nasaPowerStartDate}&endDate=${nasaPowerEndDate}&userCommunity=AG&tempAverage=DAILY&outputList=JSON,ASCII&lat=${lat}&lon=${lng}&user=anonymous`;

        return fetch(url).then(async body => {

            const result = await body.json();

            let dataFrame: IDataFrame = new DataFrame({
                columnNames: ['date', 'tMax', 'tMin', 'hum', 'windS', 'radQg', 'radQo']
            });
            const dates = Object.keys(result['features'][0]['properties']['parameter']['ALLSKY_SFC_SW_DWN']);
            const data = result['features'][0]['properties']['parameter'];
            const elevation = result['features'][0]['geometry']['coordinates'][2];

            for (const date of dates) {
                const radQg = data['ALLSKY_SFC_SW_DWN'][date];
                const radQo = data['ALLSKY_TOA_SW_DWN'][date];
                const hum = data['RH2M'][date];
                const tmax = data['T2M_MAX'][date];
                const tmin = data['T2M_MIN'][date];
                const wind = data['WS2M'][date];

                dataFrame = dataFrame.appendPair([1, { date: date, tMax: tmax, tMin: tmin, hum: hum, windS: wind, radQg: radQg, radQo: radQo }]);
            }

            dataFrame = dataFrame.resetIndex();

            const dataFrameJson: Clime[] = JSON.parse(dataFrame.toJSON());

            const climateCapsule: ClimateCapsule = {
                startDate,
                endDate,
                lat,
                lng,
                service: 'nasaPower',
                elevation,
                climates: dataFrameJson
            }

            return climateCapsule;

        });

    }

}

/* const nasa = new NasaPowerProvider();

nasa.getClimePeriod(-8.989434, -37.488187, '20200701', '20200703').then(result => {
    console.log(result);
}); */

