import { IClimateGateway } from "@src/data/gateway/climateGateway";
import { ClimateCapsule, Clime, Station } from "@domain/entity";
import { DataFrame, IDataFrame } from 'data-forge';
import dataForge from 'data-forge-fs';
import { getGlobalRadiation } from "@src/main/util";
import dayjs from 'dayjs';
import fetch from 'node-fetch';

export class InmetProvider implements IClimateGateway {

    private station: Station

    constructor(station: Station) {
        this.station = station;
    }

    async getClimePeriod(lat: number, lng: number, startDate: string, endDate: string): Promise<ClimateCapsule> {

        const inmetStartDate = dayjs(startDate, 'YYYYMMDD').format('YYYY-MM-DD');
        const inmetEndDate = dayjs(endDate, 'YYYYMMDD').format('YYYY-MM-DD');
        const stationCod = this.station.stationCod;

        const url = `https://apitempo.inmet.gov.br/estacao/${inmetStartDate}/${inmetEndDate}/${stationCod}`;

        return fetch(url).then(async body => {

            const result: object[] = await body.json();

            let dataFrame: IDataFrame = new DataFrame({
                columnNames: ['date', 'utc', 'tMax', 'tMin', 'hum', 'windS', 'radQg', 'radQo']
            });

            const elevation = this.station.elevation;

            result.forEach((obj, idx) => {
                if (obj['TEM_MAX'] && obj['TEM_MIN']) {
                    const date = dayjs(obj['DT_MEDICAO'], 'YYYY-MM-DD').format('YYYYMMDD');
                    const utc = parseFloat(obj['HR_MEDICAO']);
                    const radQg = parseFloat(obj['RAD_GLO']);
                    const radQo = parseFloat(getGlobalRadiation(dayjs(date, 'YYYYMMDD').month(), lat));
                    const hum = parseFloat(obj['UMD_INS']);
                    const tmax = parseFloat(obj['TEM_MAX']);
                    const tmin = parseFloat(obj['TEM_MIN']);
                    const wind = parseFloat(obj['VEN_VEL']);

                    dataFrame = dataFrame.appendPair([1, { date: date, utc: utc, tMax: tmax, tMin: tmin, hum: hum, windS: wind, radQg: radQg, radQo: radQo }]);
                }

            })

            dataFrame = dataFrame.resetIndex();

            dataFrame = dataFrame.pivot("date", {
                utc: series => series.max(),
                tMax: series => series.max(),
                tMin: series => series.min(),
                hum: series => parseFloat(series.average().toFixed(2)),
                windS: series => parseFloat(series.average().toFixed(2)),
                radQo: series => parseFloat(series.average().toFixed(2)),
                radQg: series => {
                    const radQg_mean = series.average();
                    const rad = (radQg_mean / 3.6) * 0.0864;
                    return parseFloat(rad.toFixed(2));
                }
            });

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
                service: 'inmet',
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

