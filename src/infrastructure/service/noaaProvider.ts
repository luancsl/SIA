import { IClimateGateway } from "@src/data/gateway/climateGateway";
import { ClimateCapsule, Clime, Station } from "@domain/entity";
import { DataFrame, IDataFrame } from 'data-forge';
import dataForge from 'data-forge-fs';
import { getGlobalRadiation } from "@src/main/util";
import dayjs from 'dayjs';
import fetch from 'node-fetch';

export class NoaaProvider implements IClimateGateway {

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

        startDateFormat = startDateFormat.format('YYYY-MM-DD');
        endDateFormat = endDateFormat.format('YYYY-MM-DD');

        console.log(startDateFormat)
        console.log(endDateFormat)



        const url = `https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=${stationCod}&units=metric&startdate=${startDateFormat}&enddate=${endDateFormat}&limit=1000&datatypeid=TMAX,TMIN,AWND,EVAP,TSUN,TOBS`;

        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": "AYKAdwzMcTNDElkFfPofHEjHupvloYkw"
            }
        }).then(async body => {
            const result: any = await body.json();

            const meta = result.metadata
            const data = result.results

            let dataGroupByDate = data.reduce((r, a) => {
                r[a.date] = [...r[a.date] || [], a];
                return r;
            }, {})

            Object.keys(dataGroupByDate).map(function (key, index) {
                dataGroupByDate[key] = dataGroupByDate[key].reduce((r, a) => {
                    r[a.datatype] = a;
                    return r;
                }, {});
            });

            let dataFrame: IDataFrame = new DataFrame({
                columnNames: ['date', 'utc', 'tMax', 'tMin', 'hum', 'windS', 'radQg', 'radQo']
            });

            const elevation = this.station.elevation;

            Object.keys(dataGroupByDate).forEach((key, idx) => {
                let obj = dataGroupByDate[key]
                if ((obj['TMAX'] ? obj['TMAX'].value : false) && (obj['TMIN'] ? obj['TMIN'].value : false)) {
                    const date = dayjs(key, 'YYYY-MM-DDT00:00:00').format('YYYYMMDD');
                    const utc = null;
                    const radQg = null;
                    const radQo = parseFloat(getGlobalRadiation(dayjs(date, 'YYYYMMDD').month(), lat));
                    const hum = null;
                    const tmax: number = parseFloat(obj['TMAX'].value + "");
                    const tmin: number = parseFloat(obj['TMIN'].value + "");
                    const wind: number = parseFloat(obj['AWND'] ? obj['AWND'].value : null + "");

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
                service: 'noaa',
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
    stationCod: 'GHCND:USS0014B04S',
    status: 'enabled',
    type: 'automatic',
    entity: 'Noaa',
    location: {
        type: "Point",
        coordinates: [-8.989434, -37.488187]
    },
    country: 'US',
    elevation: 100
}

const Noaa = new NoaaProvider(station);

Noaa.getClimePeriod(-8.989434, -37.488187, '20201024', '20202024').then(result => {
    console.log(result);
}); */

