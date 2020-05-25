var request = require('request');
const cheerio = require('cheerio');
const dataForge = require('data-forge');
const dayjs = require('dayjs');

const a = (station, lat, lon, url, start_date, end_date, callback) => {

  df = new dataForge.DataFrame({
    columnNames: ['Date', 'UTC', 'Tmax', 'Tmin', 'Hum', 'Wind', 'Rad_Qg', 'Rad_Q0']
  });

  request(url, async (err, response, html) => {

    const $ = cheerio.load(html);
    const cod = $('input[name=xaleaValue]').attr('value').replace(/[A-Za-z0-9=]{8}$/, 'MDY0OA==');

    config = {
      "aleaValue": "MDY0OA==",
      "xaleaValue": cod,
      "dtaini": dayjs(start_date, 'YYYYMMDD').format('DD/MM/YYYY'),
      "dtafim": dayjs(end_date, 'YYYYMMDD').format('DD/MM/YYYY'),
      "aleaNum": "0648",
      "xID": "272"
    }


    const param = 'ALLSKY_TOA_SW_DWN';

    const nasaDate = dayjs(start_date, 'YYYYMMDD').subtract(9, 'day').format('YYYYMMDD');

    console.log("Dia: ", nasaDate);

    const url_nasa = `https://power.larc.nasa.gov/cgi-bin/v1/DataAccess.py?request=execute&identifier=SinglePoint&parameters=${param}&startDate=${nasaDate}&endDate=${nasaDate}&userCommunity=AG&tempAverage=DAILY&outputList=JSON,ASCII&lat=${lat}&lon=${lon}&user=anonymous`;

    request({ url: url_nasa, json: true }, async (err, response, body_nasa) => {

      console.log('Resultado nasa', body_nasa);
      let rad_q0 = 31.02;

      request.post({ uri: url, formData: config }, (err, response, body) => {

        const $ = cheerio.load(body);

        const a = $('tbody').eq(-1).find('tr');

        /* let lastValue = a.last();
        lastValue = $(lastValue).find('span');
        const lastUtc = parseInt(lastValue.eq(1).text());
        console.log("tam:", a.length);

        let run = false */

        a.each(function (i, elem) {

          /* if (run) { */
          const valor = $(this).find('span');
          const date = valor.eq(0).text();
          const utc = parseFloat(valor.eq(1).text());
          const tmax = parseFloat(valor.eq(3).text());
          const tmin = parseFloat(valor.eq(4).text());
          const hum = parseFloat(valor.eq(5).text());
          const wind = parseFloat(valor.eq(14).text());
          rad_q0 = parseFloat(rad_q0);
          let rad_qg = valor.eq(17).text();

          try {
            rad_qg_split = rad_qg.split('.');
            const length = (rad_qg_split[1]).length;
            number1 = rad_qg_split[0];

            if ((length > 2) && (number1 > 0)) {
              rad_qg = rad_qg.replace('.', '');
            }
          }
          catch (e) {
            console.log("erro:", e);
          }

          rad_qg = parseFloat(rad_qg);
          console.log('Test:', `${date} : ${utc}`);

          df = df.appendPair([1, { Date: dayjs(date, 'DD/MM/YYYY').format('YYYYMMDD'), UTC: utc, Tmax: tmax, Tmin: tmin, Hum: hum, Wind: wind, Rad_Qg: rad_qg, Rad_Q0: rad_q0 }]);

          /* } else if (i === lastUtc) {

            run = true;
          } */

        });

        df = df.resetIndex();

        df = df.pivot("Date", {
          Tmax: series => series.max(),
          Tmin: series => series.min(),
          Hum: series => parseFloat(series.average().toFixed(2)),
          Wind: series => parseFloat(series.average().toFixed(2)),
          Rad_Q0: series => parseFloat(series.average().toFixed(2)),
          Rad_Qg: series => {
            const rad_mean = series.average();
            const rad = (rad_mean / 3.6) * 0.0864;
            return parseFloat(rad.toFixed(2));
          }
        });

        const df_json = JSON.parse(df.toJSON());

        const package = {
          messege: {
            operation: 'success',
          },
          features: {
            service: 'inmet',
            type: 'station',
            parameters: {
              location: {
                lat: lat,
                lon: lon,
                elevation: station.elevation,
              },
              country: station.country,
              state: station.state,
              city: station.city,
              start_date: start_date,
              end_date: end_date,
              distance: station.distance.toFixed(3)
            },
            data: df_json,
          }

        }

        callback(package);

      });


    });


  });

}

module.exports = a;