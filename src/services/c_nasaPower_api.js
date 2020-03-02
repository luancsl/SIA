var request = require('request');
const cheerio = require('cheerio');
const dataForge = require('data-forge');
const dayjs = require('dayjs');


const a = (station = null, lat, lon, urlStation = null, start_date, end_date, callback) => {

  df = new dataForge.DataFrame({
    columnNames: ['Date', 'Tmax', 'Tmin', 'Hum', 'Wind', 'Rad_Qg', 'Rad_Q0']
  });

  const param = 'T2M,T2M_MAX,T2M_MIN,WS2M,RH2M,ALLSKY_TOA_SW_DWN,ALLSKY_SFC_SW_DWN';

  const nasa_start_date = dayjs(start_date, 'YYYYMMDD').subtract(9, 'day').format('YYYYMMDD');
  const nasa_end_date = dayjs(end_date, 'YYYYMMDD').subtract(9, 'day').format('YYYYMMDD');

  const url = `https://power.larc.nasa.gov/cgi-bin/v1/DataAccess.py?request=execute&identifier=SinglePoint&parameters=${param}&startDate=${nasa_start_date}&endDate=${nasa_end_date}&userCommunity=AG&tempAverage=DAILY&outputList=JSON,ASCII&lat=${lat}&lon=${lon}&user=anonymous`;

  request({ url: url, json: true }, async (err, response, body) => {

    const dates = Object.keys(body['features'][0]['properties']['parameter']['ALLSKY_SFC_SW_DWN']);
    const data = body['features'][0]['properties']['parameter'];
    const elevation = body['features'][0]['geometry']['coordinates'][2];

    for (const date of dates) {
      const rad_qg = data['ALLSKY_SFC_SW_DWN'][date];
      const rad_q0 = data['ALLSKY_TOA_SW_DWN'][date];
      const hum = data['RH2M'][date];
      const tmax = data['T2M_MAX'][date];
      const tmin = data['T2M_MIN'][date];
      const wind = data['WS2M'][date];

      df = df.appendPair([1, { Date: date, Tmax: tmax, Tmin: tmin, Hum: hum, Wind: wind, Rad_Qg: rad_qg, Rad_Q0: rad_q0 }]);
    }

    df = df.resetIndex();

    const df_json = JSON.parse(df.toJSON());

    const package = {
      messege: {
        operation: 'success',
      },
      features: {
        service: 'nasa_power',
        type: 'satellite',
        parameters: {
          location: {
            lat: lat,
            lon: lon,
            elevation: elevation,
          },
          start_date: start_date,
          end_date: end_date,
        },
        data: df_json,
      }

    }

    callback(package);

  });

}

module.exports = a;