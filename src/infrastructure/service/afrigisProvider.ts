import { IClimateGateway } from "@src/data/gateway/climateGateway";
import { ClimateCapsule, Clime, Station } from "@domain/entity";
import { DataFrame, IDataFrame } from 'data-forge';
import dataForge from 'data-forge-fs';
import { getGlobalRadiation } from "@src/main/util";
import dayjs from 'dayjs';
import fetch from 'node-fetch';

export class AfrigisProvider implements IClimateGateway {

    private station: Station

    constructor(station: Station) {
        this.station = station;
    }

    async getClimePeriod(lat: number, lng: number, startDate: string, endDate: string): Promise<ClimateCapsule> {

        const inmetStartDate = dayjs(startDate, 'YYYYMMDD').format('YYYY-MM-DD');
        const inmetEndDate = dayjs(endDate, 'YYYYMMDD').format('YYYY-MM-DD');
        const stationCod = this.station.stationCod;

        const url = `https://saas.afrigis.co.za/rest/2/weather.forecast.daily.getByStations/3db4d7570d/trial/?synop_no=${stationCod}&groups=basic`;

        return fetch(url).then(async body => {

            const res = await body.json();
            const result = res.result;

            let dataFrame: IDataFrame = new DataFrame({
                columnNames: ['date', 'utc', 'tMax', 'tMin', 'hum', 'windS', 'radQg', 'radQo']
            });

            const elevation = this.station.elevation;


            result.forEach((obj1, idx) => {
                const obj = obj1.forecasts[0];
                if (obj.basic['temperature_maximum'] && obj.basic['temperature_minimum']) {
                    const date = dayjs(obj['date'], 'YYYY-MM-DD').format('YYYYMMDD');
                    const utc = null;
                    const radQg = null;
                    const radQo = parseFloat(getGlobalRadiation(dayjs(obj['date'], 'YYYY-MM-DD').month(), lat));
                    const hum = null
                    const tmax = parseFloat(obj.basic['temperature_maximum']);
                    const tmin = parseFloat(obj.basic['temperature_minimum']);
                    const wind = parseFloat(obj.basic['wind_speed']);

                    dataFrame = dataFrame.appendPair([1, { date: date, utc: utc, tMax: tmax, tMin: tmin, hum: hum, windS: wind, radQg: radQg, radQo: radQo }]);
                }
            })

            dataFrame = dataFrame.resetIndex();


            dataFrame = dataFrame.select(row => {
                const newRow = Object.assign({}, row);
                if (newRow['radQo'] && newRow['radQg'] > newRow['radQo'] || !(newRow['radQg'])) {
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
                service: 'afrigis',
                station: this.station,
                elevation,
                climatesCSVFormat: dataFrame.toCSV(),
                climates: dataFrameJson
            }

            return climateCapsule;

        });

    }

}

/* const station: Station = {
    stationCod: 'A001',
    status: 'enabled',
    type: 'automatic',
    entity: 'inmet',
    location: [-8.989434, -37.488187],
    country: 'BR',
    elevation: 100
}

const inmet = new InmetProvider(station);

inmet.getClimePeriod(-8.989434, -37.488187, '20200801', '20200802').then(result => {
    console.log(result);
}); */

