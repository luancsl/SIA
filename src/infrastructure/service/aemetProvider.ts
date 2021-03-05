import { IClimateGateway } from "@src/data/gateway/climateGateway";
import { ClimateCapsule, Clime, Station } from "@domain/entity";
import { DataFrame, IDataFrame } from 'data-forge';
import dataForge from 'data-forge-fs';
import { getGlobalRadiation } from "@src/main/util";
import dayjs from 'dayjs';
import fetch from 'node-fetch';

export class AemetProvider implements IClimateGateway {

    private station: Station

    constructor(station: Station) {
        this.station = station;
    }

    async getClimePeriod(lat: number, lng: number, startDate: string, endDate: string): Promise<ClimateCapsule> {

        const stationCod = this.station.stationCod;
        const dateDelay = dayjs().subtract(5, 'day');
        let startDateFormat: any = dayjs(startDate, 'YYYYMMDD');
        let endDateFormat: any = dayjs(endDate, 'YYYYMMDD');


        if (endDateFormat > dateDelay) {
            if (startDateFormat > dateDelay) {
                startDateFormat = dateDelay;
            }
            endDateFormat = dateDelay;
        }

        startDateFormat = startDateFormat.format('YYYY-MM-DDT00:00:00[UTC]');
        endDateFormat = endDateFormat.format('YYYY-MM-DDT00:00:00[UTC]');

        console.log(startDateFormat)
        console.log(endDateFormat)

        const url = `https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/${startDateFormat}/fechafin/${endDateFormat}/estacion/${stationCod}/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1bmFtZWNvbnRhY3RAZ21haWwuY29tIiwianRpIjoiYmRjNjdmOTctYjM1Zi00OGNiLTg4MzUtYTQyMDliYzNiODlmIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2MDE2NjU5ODMsInVzZXJJZCI6ImJkYzY3Zjk3LWIzNWYtNDhjYi04ODM1LWE0MjA5YmMzYjg5ZiIsInJvbGUiOiIifQ.xPVjVfJOih5GbKGAc2UperE5W8T5Mw01idz2WAXwclQ`;

        return fetch(url).then(async body0 => {
            const result: any = await body0.json();
            console.log("put", result);
            return fetch(result.datos).then(async body => {
                const result: object[] = await body.json();

                let dataFrame: IDataFrame = new DataFrame({
                    columnNames: ['date', 'utc', 'tMax', 'tMin', 'hum', 'windS', 'radQg', 'radQo']
                });

                const elevation = this.station.elevation;

                result.forEach((obj, idx) => {
                    if (obj['tmax'] && obj['tmin']) {
                        const date = dayjs(obj['fecha'], 'YYYY/MM/DD').format('YYYYMMDD');
                        const utc = null;
                        const radQg = null;
                        const radQo = parseFloat(getGlobalRadiation(dayjs(date, 'YYYYMMDD').month(), lat));
                        const hum = null;
                        const tmax: number = parseFloat((obj['tmax'] + "").replace(/,/gi, '.'));
                        const tmin: number = parseFloat((obj['tmin'] + "").replace(/,/gi, '.'));
                        const wind: number = parseFloat((obj['velmedia'] + "").replace(/,/gi, '.'));

                        dataFrame = dataFrame.appendPair([1, { date: date, utc: utc, tMax: tmax, tMin: tmin, hum: hum, windS: wind, radQg: radQg, radQo: radQo }]);
                    } 
                })

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
                    service: 'aemet',
                    station: this.station,
                    elevation,
                    climatesCSVFormat: dataFrame.toCSV(),
                    climates: dataFrameJson
                }

                return climateCapsule;
            })

        });

    }

}

/* const station: Station = {
    stationCod: 'A001',
    status: 'enabled',
    type: 'automatic',
    entity: 'Aemet',
    location: [-8.989434, -37.488187],
    country: 'BR',
    elevation: 100
}

const Aemet = new AemetProvider(station);

Aemet.getClimePeriod(-8.989434, -37.488187, '20200801', '20200802').then(result => {
    console.log(result);
}); */

