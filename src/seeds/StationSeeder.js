require('../models/stationModel');
const variables = require('../../bin/configuration/variables');
const mongoose = require('mongoose');

try {
    mongoose.connect(variables.Database.connection, {
        useNewUrlParser: true,
    });
} catch (error) {
    console.log('erro: '.concat(error));
}

const stationModel = mongoose.model('Station');

const StationSeeder = () => {

    const result = stationModel.insertMany(data).then(resposta => { });

    return result
}

module.exports = StationSeeder;


const data = [
    {
        "station_cod": "C891",
        "elevation": 1285,
        "location": [
            -84.0000,
            -79.4942
        ],
        "city": "Projeto Criosfera",
        "state": "AA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?Qzg5MQ=="
    },
    {
        "station_cod": "A108",
        "elevation": 220,
        "location": [
            -7.610773,
            -72.681333
        ],
        "city": "Cruzeiro do Sul",
        "state": "AC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEwOA=="
    },
    {
        "station_cod": "A140",
        "elevation": 225,
        "location": [
            -11.023752,
            -68.735180
        ],
        "city": "Epitaciolândia",
        "state": "AC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTE0MA=="
    },
    {
        "station_cod": "A138",
        "elevation": 157,
        "location": [
            -8.142654,
            -70.343594
        ],
        "city": "Feijó",
        "state": "AC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEzOA=="
    },
    {
        "station_cod": "A137",
        "elevation": 221,
        "location": [
            -8.950008,
            -72.786778
        ],
        "city": "Marechal Thaumaturgo",
        "state": "AC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEzNw=="
    },
    {
        "station_cod": "A102",
        "elevation": 185,
        "location": [
            -9.358353,
            -69.926257
        ],
        "city": "Parque Estadual Chandless",
        "state": "AC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEwMg=="
    },
    {
        "station_cod": "A136",
        "elevation": 205,
        "location": [
            -8.267197,
            -72.747838
        ],
        "city": "Porto Walter",
        "state": "AC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEzNg=="
    },
    {
        "station_cod": "A104",
        "elevation": 224,
        "location": [
            -9.957844,
            -68.165169
        ],
        "city": "Rio Branco",
        "state": "AC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEwNA=="
    },
    {
        "station_cod": "A353",
        "elevation": 237,
        "location": [
            -9.804551,
            -36.619198
        ],
        "city": "Arapiraca",
        "state": "AL",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1Mw=="
    },
    {
        "station_cod": "A355",
        "elevation": 82,
        "location": [
            -10.128482,
            -36.286348
        ],
        "city": "Coruripe",
        "state": "AL",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1NQ=="
    },
    {
        "station_cod": "A303",
        "elevation": 84,
        "location": [
            -9.551168,
            -35.770195
        ],
        "city": "Maceió",
        "state": "AL",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwMw=="
    },
    {
        "station_cod": "A327",
        "elevation": 278,
        "location": [
            -9.420334,
            -36.620371
        ],
        "city": "Palmeira dos Índios",
        "state": "AL",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyNw=="
    },
    {
        "station_cod": "A323",
        "elevation": 21,
        "location": [
            -9.749220,
            -37.430765
        ],
        "city": "Pão de Açucar",
        "state": "AL",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyMw=="
    },
    {
        "station_cod": "A371",
        "elevation": 187,
        "location": [
            -9.622261,
            -37.767113
        ],
        "city": "Piranhas",
        "state": "AL",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM3MQ=="
    },
    {
        "station_cod": "A356",
        "elevation": 14,
        "location": [
            -9.287481,
            -35.565878
        ],
        "city": "São Luis do Quitunde",
        "state": "AL",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1Ng=="
    },
    {
        "station_cod": "A113",
        "elevation": 157,
        "location": [
            -7.205475,
            -59.888561
        ],
        "city": "Apui",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTExMw=="
    },
    {
        "station_cod": "A120",
        "elevation": 20,
        "location": [
            -3.583333,
            -59.12944
        ],
        "city": "Autazes",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEyMA=="
    },
    {
        "station_cod": "A128",
        "elevation": 30,
        "location": [
            -0.987292,
            -62.924251
        ],
        "city": "Barcelos",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEyOA=="
    },
    {
        "station_cod": "A110",
        "elevation": 112,
        "location": [
            -8.776804,
            -67.332557
        ],
        "city": "Boca do Acre",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTExMA=="
    },
    {
        "station_cod": "A117",
        "elevation": 34,
        "location": [
            -4.097483,
            -63.145322
        ],
        "city": "Coari",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTExNw=="
    },
    {
        "station_cod": "A109",
        "elevation": 122,
        "location": [
            -6.650301,
            -69.868610
        ],
        "city": "Eirunepé",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEwOQ=="
    },
    {
        "station_cod": "A112",
        "elevation": 54,
        "location": [
            -7.552520,
            -63.071343
        ],
        "city": "Humaitá",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTExMg=="
    },
    {
        "station_cod": "A121",
        "elevation": 42,
        "location": [
            -3.133333,
            -58.48278
        ],
        "city": "Itacoatiara",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEyMQ=="
    },
    {
        "station_cod": "A111",
        "elevation": 62,
        "location": [
            -7.260681,
            -64.788501
        ],
        "city": "Lábrea",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTExMQ=="
    },
    {
        "station_cod": "A119",
        "elevation": 37,
        "location": [
            -3.294638,
            -60.628402
        ],
        "city": "Manacapuru",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTExOQ=="
    },
    {
        "station_cod": "A101",
        "elevation": 49,
        "location": [
            -3.103682,
            -60.015461
        ],
        "city": "Manaus",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEwMQ=="
    },
    {
        "station_cod": "A133",
        "elevation": 41,
        "location": [
            -5.788533,
            -61.288276
        ],
        "city": "Manicore",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEzMw=="
    },
    {
        "station_cod": "A122",
        "elevation": 25,
        "location": [
            -3.399010,
            -57.673772
        ],
        "city": "Maués",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEyMg=="
    },
    {
        "station_cod": "A123",
        "elevation": 19,
        "location": [
            -2.639152,
            -56.756177
        ],
        "city": "Parintins",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEyMw=="
    },
    {
        "station_cod": "A126",
        "elevation": 61,
        "location": [
            -2.056558,
            -60.025756
        ],
        "city": "Presidente Figueiredo",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEyNg=="
    },
    {
        "station_cod": "A125",
        "elevation": 113,
        "location": [
            -2.633654,
            -59.600582
        ],
        "city": "Rio Urubu",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEyNQ=="
    },
    {
        "station_cod": "A134",
        "elevation": 80,
        "location": [
            -0.125207,
            -67.061246
        ],
        "city": "São Gabriel da Cachoeira",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEzNA=="
    },
    {
        "station_cod": "A124",
        "elevation": 18,
        "location": [
            -2.534749,
            -57.758099
        ],
        "city": "Urucará",
        "state": "AM",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEyNA=="
    },
    {
        "station_cod": "A251",
        "elevation": 21,
        "location": [
            0.5678333,
            -50.8235278
        ],
        "city": "Itaubal",
        "state": "AP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI1MQ=="
    },
    {
        "station_cod": "A249",
        "elevation": 17,
        "location": [
            0.035020,
            -51.088763
        ],
        "city": "Macapá",
        "state": "AP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0OQ=="
    },
    {
        "station_cod": "A242",
        "elevation": 15,
        "location": [
            3.813583,
            -51.862500
        ],
        "city": "Oiapoque",
        "state": "AP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0Mg=="
    },
    {
        "station_cod": "A244",
        "elevation": 84,
        "location": [
            0.694361,
            -51.404095
        ],
        "city": "Porto Grande",
        "state": "AP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0NA=="
    },
    {
        "station_cod": "A422",
        "elevation": 21,
        "location": [
            -17.963016,
            -38.703288
        ],
        "city": "Abrolhos",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyMg=="
    },
    {
        "station_cod": "A434",
        "elevation": 398,
        "location": [
            -13.009468,
            -39.616881
        ],
        "city": "Amargosa",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzNA=="
    },
    {
        "station_cod": "A429",
        "elevation": 408,
        "location": [
            -11.084858,
            -43.138998
        ],
        "city": "Barra",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyOQ=="
    },
    {
        "station_cod": "A402",
        "elevation": 474,
        "location": [
            -12.124715,
            -45.027049
        ],
        "city": "Barreiras",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQwMg=="
    },
    {
        "station_cod": "A447",
        "elevation": 90,
        "location": [
            -16.088049,
            -39.215389
        ],
        "city": "Belmonte",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0Nw=="
    },
    {
        "station_cod": "A418",
        "elevation": 448,
        "location": [
            -13.251094,
            -43.405365
        ],
        "city": "Bom Jesus da Lapa",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxOA=="
    },
    {
        "station_cod": "A433",
        "elevation": 473,
        "location": [
            -14.181886,
            -41.672281
        ],
        "city": "Brumado",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzMw=="
    },
    {
        "station_cod": "A432",
        "elevation": 506,
        "location": [
            -10.722925,
            -43.651203
        ],
        "city": "Buritirama",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzMg=="
    },
    {
        "station_cod": "A405",
        "elevation": 6,
        "location": [
            -17.739413,
            -39.258617
        ],
        "city": "Caravelas",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQwNQ=="
    },
    {
        "station_cod": "A431",
        "elevation": 32,
        "location": [
            -12.035833,
            -37.683889
        ],
        "city": "Conde",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzMQ=="
    },
    {
        "station_cod": "A416",
        "elevation": 552,
        "location": [
            -13.332386,
            -44.617376
        ],
        "city": "Correntina",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxNg=="
    },
    {
        "station_cod": "A406",
        "elevation": 220,
        "location": [
            -12.675422,
            -39.089580
        ],
        "city": "Cruz das Almas",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQwNg=="
    },
    {
        "station_cod": "A448",
        "elevation": 370,
        "location": [
            -9.0013,
            -39.9124
        ],
        "city": "Curaçá",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0OA=="
    },
    {
        "station_cod": "A443",
        "elevation": 646,
        "location": [
            -10.454920,
            -41.206996
        ],
        "city": "Delfino",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0Mw=="
    },
    {
        "station_cod": "A442",
        "elevation": 432,
        "location": [
            -10.537233,
            -38.996605
        ],
        "city": "Euclides da Cunha",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0Mg=="
    },
    {
        "station_cod": "A413",
        "elevation": 230,
        "location": [
            -12.196200,
            -38.967384
        ],
        "city": "Feira de Santana",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxMw=="
    },
    {
        "station_cod": "A452",
        "elevation": 488,
        "location": [
            -11.0521639,
            -45.2007694
        ],
        "city": "Formosa do Rio Preto",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ1Mg=="
    },
    {
        "station_cod": "A426",
        "elevation": 552,
        "location": [
            -14.2081235,
            -42.749647
        ],
        "city": "Guanambi",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyNg=="
    },
    {
        "station_cod": "A439",
        "elevation": 425,
        "location": [
            -12.193060,
            -43.213420
        ],
        "city": "Ibotirama",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzOQ=="
    },
    {
        "station_cod": "A410",
        "elevation": 80,
        "location": [
            -14.658803,
            -39.181438
        ],
        "city": "Ilhéus",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxMA=="
    },
    {
        "station_cod": "A445",
        "elevation": 132,
        "location": [
            -14.171304,
            -39.692502
        ],
        "city": "Ipiaú",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0NQ=="
    },
    {
        "station_cod": "A424",
        "elevation": 768,
        "location": [
            -11.328998,
            -41.864504
        ],
        "city": "Irecê",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyNA=="
    },
    {
        "station_cod": "A408",
        "elevation": 250,
        "location": [
            -12.524062,
            -40.299714
        ],
        "city": "Itaberaba",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQwOA=="
    },
    {
        "station_cod": "A455",
        "elevation": 110,
        "location": [
            -17.436667,
            -39.550861
        ],
        "city": "Itamaraju",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ1NQ=="
    },
    {
        "station_cod": "A446",
        "elevation": 271,
        "location": [
            -15.24462,
            -40.22955
        ],
        "city": "Itapetinga",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0Ng=="
    },
    {
        "station_cod": "A407",
        "elevation": 757,
        "location": [
            -13.527828,
            -40.119752
        ],
        "city": "Itiruçu",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQwNw=="
    },
    {
        "station_cod": "A440",
        "elevation": 441,
        "location": [
            -11.205136,
            -40.464979
        ],
        "city": "Jacobina",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0MA=="
    },
    {
        "station_cod": "A450",
        "elevation": 261,
        "location": [
            -10.0807,
            -38.3459
        ],
        "city": "Jeremoabo",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ1MA=="
    },
    {
        "station_cod": "A425",
        "elevation": 438,
        "location": [
            -12.557854,
            -41.388808
        ],
        "city": "Lençóis",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyNQ=="
    },
    {
        "station_cod": "A404",
        "elevation": 761,
        "location": [
            -12.152394,
            -45.829745
        ],
        "city": "Luis Eduardo Magalhaes",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQwNA=="
    },
    {
        "station_cod": "A412",
        "elevation": 339,
        "location": [
            -12.131694,
            -40.354222
        ],
        "city": "Macajuba",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxMg=="
    },
    {
        "station_cod": "A438",
        "elevation": 6,
        "location": [
            -13.90694,
            -38.97222
        ],
        "city": "Maraú",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzOA=="
    },
    {
        "station_cod": "A430",
        "elevation": 1284,
        "location": [
            -13.155681,
            -41.774125
        ],
        "city": "Piatã",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzMA=="
    },
    {
        "station_cod": "A449",
        "elevation": 385,
        "location": [
            -10.018333,
            -42.500278
        ],
        "city": "Pilão Arcado",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0OQ=="
    },
    {
        "station_cod": "A427",
        "elevation": 86,
        "location": [
            -16.388977,
            -39.182389
        ],
        "city": "Porto Seguro",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyNw=="
    },
    {
        "station_cod": "A436",
        "elevation": 310,
        "location": [
            -10.984645,
            -39.617009
        ],
        "city": "Queimadas",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzNg=="
    },
    {
        "station_cod": "A423",
        "elevation": 397,
        "location": [
            -9.625693,
            -42.077214
        ],
        "city": "Remanso",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyMw=="
    },
    {
        "station_cod": "A458",
        "elevation": 182,
        "location": [
            -11.058722,
            -38.444028
        ],
        "city": "Ribeira do Amparo",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ1OA=="
    },
    {
        "station_cod": "A401",
        "elevation": 48,
        "location": [
            -13.005515,
            -38.505760
        ],
        "city": "Salvador",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQwMQ=="
    },
    {
        "station_cod": "A456",
        "elevation": 31,
        "location": [
            -12.808222,
            -38.495944
        ],
        "city": "Salvador-Est. Rádio Marinha",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ1Ng=="
    },
    {
        "station_cod": "A415",
        "elevation": 450,
        "location": [
            -11.002768,
            -44.524965
        ],
        "city": "Santa Rita de Cássia",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxNQ=="
    },
    {
        "station_cod": "A428",
        "elevation": 532,
        "location": [
            -10.443072,
            -40.148244
        ],
        "city": "Senhor do Bonfim",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyOA=="
    },
    {
        "station_cod": "A441",
        "elevation": 338,
        "location": [
            -11.664586,
            -39.022946
        ],
        "city": "Serrinha",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0MQ=="
    },
    {
        "station_cod": "A435",
        "elevation": 451,
        "location": [
            -9.833617,
            -39.495631
        ],
        "city": "Uauá",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzNQ=="
    },
    {
        "station_cod": "A437",
        "elevation": 74,
        "location": [
            -15.280215,
            -39.091270
        ],
        "city": "Una",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQzNw=="
    },
    {
        "station_cod": "A444",
        "elevation": 93,
        "location": [
            -13.34361,
            -39.12667
        ],
        "city": "Valença",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ0NA=="
    },
    {
        "station_cod": "A414",
        "elevation": 879,
        "location": [
            -14.886428,
            -40.801330
        ],
        "city": "Vitória da Conquista",
        "state": "BA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxNA=="
    },
    {
        "station_cod": "A360",
        "elevation": 67,
        "location": [
            -3.121067,
            -40.087288
        ],
        "city": "Acaraú",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2MA=="
    },
    {
        "station_cod": "A315",
        "elevation": 409,
        "location": [
            -7.300925,
            -39.271107
        ],
        "city": "Barbalha",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxNQ=="
    },
    {
        "station_cod": "A347",
        "elevation": 578,
        "location": [
            -7.077730,
            -40.362678
        ],
        "city": "Campos Sales",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0Nw=="
    },
    {
        "station_cod": "A342",
        "elevation": 298,
        "location": [
            -5.186636,
            -40.672128
        ],
        "city": "Crateús",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0Mg=="
    },
    {
        "station_cod": "A305",
        "elevation": 30,
        "location": [
            -3.815701,
            -38.537792
        ],
        "city": "Fortaleza",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwNQ=="
    },
    {
        "station_cod": "A314",
        "elevation": 866,
        "location": [
            -4.261351,
            -38.931068
        ],
        "city": "Guaramiranga",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxNA=="
    },
    {
        "station_cod": "A319",
        "elevation": 222,
        "location": [
            -6.396375,
            -39.268954
        ],
        "city": "Iguatu",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxOQ=="
    },
    {
        "station_cod": "A359",
        "elevation": 104,
        "location": [
            -3.484298,
            -39.588715
        ],
        "city": "Itapipoca",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1OQ=="
    },
    {
        "station_cod": "A358",
        "elevation": 149,
        "location": [
            -5.905589,
            -38.627792
        ],
        "city": "Jaguaribe",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1OA=="
    },
    {
        "station_cod": "A339",
        "elevation": 49,
        "location": [
            -4.837739,
            -37.699725
        ],
        "city": "Jaguaruana",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzOQ=="
    },
    {
        "station_cod": "A332",
        "elevation": 45,
        "location": [
            -5.136689,
            -38.356590
        ],
        "city": "Morada Nova",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzMg=="
    },
    {
        "station_cod": "A369",
        "elevation": 193,
        "location": [
            -4.978783,
            -39.057183
        ],
        "city": "Quixadá",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2OQ=="
    },
    {
        "station_cod": "A325",
        "elevation": 221,
        "location": [
            -5.174568,
            -39.289393
        ],
        "city": "Quixeramobim",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyNQ=="
    },
    {
        "station_cod": "A306",
        "elevation": 92,
        "location": [
            -3.748177,
            -40.345720
        ],
        "city": "Sobral",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwNg=="
    },
    {
        "station_cod": "A324",
        "elevation": 411,
        "location": [
            -6.017474,
            -40.281321
        ],
        "city": "Tauá",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyNA=="
    },
    {
        "station_cod": "A368",
        "elevation": 756,
        "location": [
            -3.732164,
            -41.011886
        ],
        "city": "Tianguá",
        "state": "CE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2OA=="
    },
    {
        "station_cod": "A045",
        "elevation": 1030,
        "location": [
            -15.596491,
            -47.625801
        ],
        "city": "Águas Emendadas",
        "state": "DF",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0NQ=="
    },
    {
        "station_cod": "A001",
        "elevation": 1161,
        "location": [
            -15.789343,
            -47.925756
        ],
        "city": "Brasília",
        "state": "DF",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAwMQ=="
    },
    {
        "station_cod": "A042",
        "elevation": 1143,
        "location": [
            -15.652894,
            -48.201369
        ],
        "city": "Brazlândia",
        "state": "DF",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0Mg=="
    },
    {
        "station_cod": "A046",
        "elevation": 990,
        "location": [
            -15.935139,
            -48.137377
        ],
        "city": "Gama (Ponte Alta)",
        "state": "DF",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0Ng=="
    },
    {
        "station_cod": "A047",
        "elevation": 1043,
        "location": [
            -16.012222,
            -47.557417
        ],
        "city": "Paranoá (COOPA)",
        "state": "DF",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0Nw=="
    },
    {
        "station_cod": "A657",
        "elevation": 507,
        "location": [
            -20.104194,
            -41.106861
        ],
        "city": "Afonso Cláudio",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTY1Nw=="
    },
    {
        "station_cod": "A617",
        "elevation": 129,
        "location": [
            -20.750412,
            -41.488852
        ],
        "city": "Alegre",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxNw=="
    },
    {
        "station_cod": "A615",
        "elevation": 14,
        "location": [
            -20.636526,
            -40.741818
        ],
        "city": "Alfredo Chaves",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxNQ=="
    },
    {
        "station_cod": "A631",
        "elevation": 224,
        "location": [
            -18.291519,
            -40.736412
        ],
        "city": "Ecoporanga",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYzMQ=="
    },
    {
        "station_cod": "A614",
        "elevation": 38,
        "location": [
            -19.356923,
            -40.068680
        ],
        "city": "Linhares",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxNA=="
    },
    {
        "station_cod": "A632",
        "elevation": 95,
        "location": [
            -19.407181,
            -40.539825
        ],
        "city": "Marilândia",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYzMg=="
    },
    {
        "station_cod": "A623",
        "elevation": 156,
        "location": [
            -18.695265,
            -40.390572
        ],
        "city": "Nova Venécia",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyMw=="
    },
    {
        "station_cod": "A622",
        "elevation": 69,
        "location": [
            -21.100805,
            -41.039395
        ],
        "city": "Presidente Kennedy",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyMg=="
    },
    {
        "station_cod": "A613",
        "elevation": 976,
        "location": [
            -19.988388,
            -40.579572
        ],
        "city": "Santa Teresa",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxMw=="
    },
    {
        "station_cod": "A616",
        "elevation": 29,
        "location": [
            -18.676198,
            -39.864051
        ],
        "city": "São Mateus",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxNg=="
    },
    {
        "station_cod": "A633",
        "elevation": 722,
        "location": [
            -20.385423,
            -41.1899342
        ],
        "city": "Venda Nova do Imigrante",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYzMw=="
    },
    {
        "station_cod": "A634",
        "elevation": 25,
        "location": [
            -20.467069,
            -40.404051
        ],
        "city": "Vila Velha",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYzNA=="
    },
    {
        "station_cod": "A612",
        "elevation": 9,
        "location": [
            -20.271094,
            -40.306069
        ],
        "city": "Vitória",
        "state": "ES",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxMg=="
    },
    {
        "station_cod": "A024",
        "elevation": 1265,
        "location": [
            -14.133074,
            -47.523258
        ],
        "city": "Alto Paraíso de Goiás",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyNA=="
    },
    {
        "station_cod": "A013",
        "elevation": 327,
        "location": [
            -15.902658,
            -52.245172
        ],
        "city": "Aragarças",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxMw=="
    },
    {
        "station_cod": "A023",
        "elevation": 740,
        "location": [
            -16.966841,
            -51.817567
        ],
        "city": "Caiapônia",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyMw=="
    },
    {
        "station_cod": "A034",
        "elevation": 901,
        "location": [
            -18.154779,
            -47.927614
        ],
        "city": "Catalão",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzNA=="
    },
    {
        "station_cod": "A036",
        "elevation": 1211,
        "location": [
            -16.784896,
            -47.612966
        ],
        "city": "Cristalina",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzNg=="
    },
    {
        "station_cod": "A056",
        "elevation": 932,
        "location": [
            -16.399314,
            -47.625842
        ],
        "city": "Cristalina-Fazenda Santa Monica",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA1Ng=="
    },
    {
        "station_cod": "A029",
        "elevation": 610,
        "location": [
            -17.337001,
            -49.914778
        ],
        "city": "Edéia",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyOQ=="
    },
    {
        "station_cod": "A022",
        "elevation": 667,
        "location": [
            -15.220199,
            -48.990107
        ],
        "city": "Goianésia",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyMg=="
    },
    {
        "station_cod": "A002",
        "elevation": 727,
        "location": [
            -16.642841,
            -49.220222
        ],
        "city": "Goiânia",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAwMg=="
    },
    {
        "station_cod": "A014",
        "elevation": 513,
        "location": [
            -15.939729,
            -50.141433
        ],
        "city": "Goiás",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxNA=="
    },
    {
        "station_cod": "A028",
        "elevation": 610,
        "location": [
            -16.423059,
            -51.148801
        ],
        "city": "Iporá",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyOA=="
    },
    {
        "station_cod": "A015",
        "elevation": 551,
        "location": [
            -14.979792,
            -49.539977
        ],
        "city": "Itapaci",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxNQ=="
    },
    {
        "station_cod": "A035",
        "elevation": 491,
        "location": [
            -18.409761,
            -49.192061
        ],
        "city": "Itumbiara",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzNQ=="
    },
    {
        "station_cod": "A016",
        "elevation": 670,
        "location": [
            -17.923622,
            -51.717467
        ],
        "city": "Jataí",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxNg=="
    },
    {
        "station_cod": "A012",
        "elevation": 1001,
        "location": [
            -16.260542,
            -47.966962
        ],
        "city": "Luziânia",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxMg=="
    },
    {
        "station_cod": "A026",
        "elevation": 862,
        "location": [
            -17.454886,
            -52.601222
        ],
        "city": "Mineiros",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyNg=="
    },
    {
        "station_cod": "A032",
        "elevation": 551,
        "location": [
            -13.253521,
            -46.890326
        ],
        "city": "Monte Alegre de Goiás",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzMg=="
    },
    {
        "station_cod": "A003",
        "elevation": 751,
        "location": [
            -17.745066,
            -49.101698
        ],
        "city": "Morrinhos",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAwMw=="
    },
    {
        "station_cod": "A027",
        "elevation": 679,
        "location": [
            -16.962536,
            -50.425450
        ],
        "city": "Paraúna",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyNw=="
    },
    {
        "station_cod": "A033",
        "elevation": 757,
        "location": [
            -17.304153,
            -48.284131
        ],
        "city": "Pires do Rio",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzMw=="
    },
    {
        "station_cod": "A005",
        "elevation": 365,
        "location": [
            -13.309528,
            -49.117478
        ],
        "city": "Porangatu",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAwNQ=="
    },
    {
        "station_cod": "A017",
        "elevation": 830,
        "location": [
            -14.089210,
            -46.366497
        ],
        "city": "Posse",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxNw=="
    },
    {
        "station_cod": "A025",
        "elevation": 780,
        "location": [
            -17.785303,
            -50.964869
        ],
        "city": "Rio Verde",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyNQ=="
    },
    {
        "station_cod": "A031",
        "elevation": 210,
        "location": [
            -12.820489,
            -50.335969
        ],
        "city": "São Miguel do Araguaia",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzMQ=="
    },
    {
        "station_cod": "A011",
        "elevation": 492,
        "location": [
            -18.969142,
            -50.633449
        ],
        "city": "São Simão",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxMQ=="
    },
    {
        "station_cod": "A037",
        "elevation": 952,
        "location": [
            -16.679786,
            -48.618171
        ],
        "city": "Silvânia",
        "state": "GO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzNw=="
    },
    {
        "station_cod": "A223",
        "elevation": 284,
        "location": [
            -9.108199,
            -45.932016
        ],
        "city": "Alto Parnaíba",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyMw=="
    },
    {
        "station_cod": "A220",
        "elevation": 22,
        "location": [
            -4.243056,
            -44.794993
        ],
        "city": "Bacabal",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyMA=="
    },
    {
        "station_cod": "A204",
        "elevation": 271,
        "location": [
            -7.455609,
            -46.027546
        ],
        "city": "Balsas",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIwNA=="
    },
    {
        "station_cod": "A221",
        "elevation": 154,
        "location": [
            -5.506782,
            -45.237053
        ],
        "city": "Barra do Corda",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyMQ=="
    },
    {
        "station_cod": "A238",
        "elevation": 175,
        "location": [
            -4.320597,
            -46.449503
        ],
        "city": "Buriticupu",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzOA=="
    },
    {
        "station_cod": "A205",
        "elevation": 183,
        "location": [
            -7.337269,
            -47.459839
        ],
        "city": "Carolina",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIwNQ=="
    },
    {
        "station_cod": "A237",
        "elevation": 85,
        "location": [
            -4.821352,
            -43.343659
        ],
        "city": "Caxias",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzNw=="
    },
    {
        "station_cod": "A206",
        "elevation": 104,
        "location": [
            -3.742674,
            -43.352084
        ],
        "city": "Chapadinha",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIwNg=="
    },
    {
        "station_cod": "A222",
        "elevation": 175,
        "location": [
            -6.033167,
            -44.233402
        ],
        "city": "Colinas",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyMg=="
    },
    {
        "station_cod": "A224",
        "elevation": 183,
        "location": [
            -6.653272,
            -47.418241
        ],
        "city": "Estreito",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyNA=="
    },
    {
        "station_cod": "A218",
        "elevation": 5,
        "location": [
            -2.592341,
            -42.707553
        ],
        "city": "Farol Preguiças",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxOA=="
    },
    {
        "station_cod": "A217",
        "elevation": 10,
        "location": [
            -2.270811,
            -43.624043
        ],
        "city": "Farol Santana",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxNw=="
    },
    {
        "station_cod": "A207",
        "elevation": 232,
        "location": [
            -5.816085,
            -46.162200
        ],
        "city": "Grajaú",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIwNw=="
    },
    {
        "station_cod": "A225",
        "elevation": 118,
        "location": [
            -5.555723,
            -47.459794
        ],
        "city": "Imperatriz",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyNQ=="
    },
    {
        "station_cod": "A203",
        "elevation": 55,
        "location": [
            -2.526771,
            -44.213577
        ],
        "city": "São Luís",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIwMw=="
    },
    {
        "station_cod": "A219",
        "elevation": 36,
        "location": [
            -1.661224,
            -45.372571
        ],
        "city": "Turiaçu",
        "state": "MA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxOQ=="
    },
    {
        "station_cod": "A549",
        "elevation": 754,
        "location": [
            -15.751536,
            -41.457787
        ],
        "city": "Águas Vermelhas",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0OQ=="
    },
    {
        "station_cod": "A534",
        "elevation": 288,
        "location": [
            -19.532768,
            -41.090801
        ],
        "city": "Aimorés",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzNA=="
    },
    {
        "station_cod": "A508",
        "elevation": 189,
        "location": [
            -16.166773,
            -40.687756
        ],
        "city": "Almenara",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUwOA=="
    },
    {
        "station_cod": "A566",
        "elevation": 308,
        "location": [
            -16.848806,
            -42.035361
        ],
        "city": "Araçuaí",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2Ng=="
    },
    {
        "station_cod": "A505",
        "elevation": 1018,
        "location": [
            -19.605696,
            -46.949617
        ],
        "city": "Araxá",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUwNQ=="
    },
    {
        "station_cod": "A565",
        "elevation": 697,
        "location": [
            -20.031111,
            -46.008811
        ],
        "city": "Bambuí",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2NQ=="
    },
    {
        "station_cod": "A502",
        "elevation": 1169,
        "location": [
            -21.228373,
            -43.767703
        ],
        "city": "Barbacena",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUwMg=="
    },
    {
        "station_cod": "F501",
        "elevation": 1200,
        "location": [
            -19.980034,
            -43.958651
        ],
        "city": "Belo Horizonte - Cercadinho",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?RjUwMQ=="
    },
    {
        "station_cod": "A521",
        "elevation": 854,
        "location": [
            -19.883945,
            -43.969397
        ],
        "city": "Belo Horizonte - Pampulha",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyMQ=="
    },
    {
        "station_cod": "A544",
        "elevation": 894,
        "location": [
            -15.524262,
            -46.435536
        ],
        "city": "Buritis",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0NA=="
    },
    {
        "station_cod": "A530",
        "elevation": 1077,
        "location": [
            -21.918066,
            -46.382996
        ],
        "city": "Caldas",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzMA=="
    },
    {
        "station_cod": "A519",
        "elevation": 559,
        "location": [
            -19.539210,
            -49.518133
        ],
        "city": "Campina Verde",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxOQ=="
    },
    {
        "station_cod": "A541",
        "elevation": 932,
        "location": [
            -17.705504,
            -42.389256
        ],
        "city": "Capelinha",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0MQ=="
    },
    {
        "station_cod": "A554",
        "elevation": 609,
        "location": [
            -19.735757,
            -42.137146
        ],
        "city": "Caratinga",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1NA=="
    },
    {
        "station_cod": "A548",
        "elevation": 873,
        "location": [
            -15.300159,
            -45.617431
        ],
        "city": "Chapada Gaúcha",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0OA=="
    },
    {
        "station_cod": "A520",
        "elevation": 573,
        "location": [
            -19.985860,
            -48.151574
        ],
        "city": "Conceição das Alagoas",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyMA=="
    },
    {
        "station_cod": "A557",
        "elevation": 411,
        "location": [
            -21.546728,
            -43.261029
        ],
        "city": "Coronel Pacheco",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1Nw=="
    },
    {
        "station_cod": "A538",
        "elevation": 669,
        "location": [
            -18.747711,
            -44.453785
        ],
        "city": "Curvelo",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzOA=="
    },
    {
        "station_cod": "A537",
        "elevation": 1359,
        "location": [
            -18.231052,
            -43.648269
        ],
        "city": "Diamantina",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzNw=="
    },
    {
        "station_cod": "A564",
        "elevation": 796,
        "location": [
            -20.173278,
            -44.874944
        ],
        "city": "Divinópolis",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2NA=="
    },
    {
        "station_cod": "A536",
        "elevation": 721,
        "location": [
            -19.481935,
            -45.593932
        ],
        "city": "Dores do Indaiá",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzNg=="
    },
    {
        "station_cod": "A543",
        "elevation": 565,
        "location": [
            -14.912284,
            -42.808473
        ],
        "city": "Espinosa",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0Mw=="
    },
    {
        "station_cod": "A535",
        "elevation": 754,
        "location": [
            -19.885398,
            -44.416883
        ],
        "city": "Florestal",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzNQ=="
    },
    {
        "station_cod": "A524",
        "elevation": 878,
        "location": [
            -20.454930,
            -45.453825
        ],
        "city": "Formiga",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyNA=="
    },
    {
        "station_cod": "A532",
        "elevation": 198,
        "location": [
            -18.830354,
            -41.977007
        ],
        "city": "Governador Valadares",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzMg=="
    },
    {
        "station_cod": "A533",
        "elevation": 853,
        "location": [
            -18.786842,
            -42.942921
        ],
        "city": "Guanhães",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzMw=="
    },
    {
        "station_cod": "A546",
        "elevation": 997,
        "location": [
            -17.561349,
            -47.199251
        ],
        "city": "Guarda-Mor",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0Ng=="
    },
    {
        "station_cod": "A555",
        "elevation": 1199,
        "location": [
            -20.031457,
            -44.011249
        ],
        "city": "Ibirité (Rola Moça)",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1NQ=="
    },
    {
        "station_cod": "A550",
        "elevation": 272,
        "location": [
            -16.575667,
            -41.485588
        ],
        "city": "Itaobim",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1MA=="
    },
    {
        "station_cod": "A512",
        "elevation": 540,
        "location": [
            -18.952907,
            -49.525072
        ],
        "city": "Ituiutaba",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxMg=="
    },
    {
        "station_cod": "A563",
        "elevation": 532,
        "location": [
            -15.802833,
            -43.297056
        ],
        "city": "Janaúba",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2Mw=="
    },
    {
        "station_cod": "A559",
        "elevation": 468,
        "location": [
            -15.44808917,
            -44.36631333
        ],
        "city": "Januária",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1OQ=="
    },
    {
        "station_cod": "A553",
        "elevation": 877,
        "location": [
            -17.784770,
            -46.119394
        ],
        "city": "João Pinheiro",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1Mw=="
    },
    {
        "station_cod": "A518",
        "elevation": 937,
        "location": [
            -21.769965,
            -43.364329
        ],
        "city": "Juiz de Fora",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxOA=="
    },
    {
        "station_cod": "A567",
        "elevation": 969,
        "location": [
            -21.680722,
            -45.944389
        ],
        "city": "Machado",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2Nw=="
    },
    {
        "station_cod": "A556",
        "elevation": 819,
        "location": [
            -20.263378,
            -42.182817
        ],
        "city": "Manhuaçu",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1Ng=="
    },
    {
        "station_cod": "A540",
        "elevation": 255,
        "location": [
            -18.780620,
            -40.986505
        ],
        "city": "Mantena",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0MA=="
    },
    {
        "station_cod": "A531",
        "elevation": 1281,
        "location": [
            -22.314567,
            -45.373049
        ],
        "city": "Maria da Fé",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzMQ=="
    },
    {
        "station_cod": "A539",
        "elevation": 454,
        "location": [
            -15.085958,
            -44.016036
        ],
        "city": "Mocambinho",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUzOQ=="
    },
    {
        "station_cod": "A526",
        "elevation": 520,
        "location": [
            -14.408228,
            -44.404123
        ],
        "city": "Montalvânia",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyNg=="
    },
    {
        "station_cod": "A506",
        "elevation": 646,
        "location": [
            -16.686316,
            -43.843763
        ],
        "city": "Montes Claros",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUwNg=="
    },
    {
        "station_cod": "A509",
        "elevation": 1545,
        "location": [
            -22.861604,
            -46.043365
        ],
        "city": "Monte Verde",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUwOQ=="
    },
    {
        "station_cod": "A517",
        "elevation": 283,
        "location": [
            -21.104867,
            -42.375904
        ],
        "city": "Muriaé",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxNw=="
    },
    {
        "station_cod": "A570",
        "elevation": 1025,
        "location": [
            -20.714917,
            -44.864556
        ],
        "city": "Oliveira",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU3MA=="
    },
    {
        "station_cod": "A513",
        "elevation": 1048,
        "location": [
            -20.556592,
            -43.756220
        ],
        "city": "Ouro Branco",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxMw=="
    },
    {
        "station_cod": "A571",
        "elevation": 705,
        "location": [
            -17.244361,
            -46.881667
        ],
        "city": "Paracatu",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU3MQ=="
    },
    {
        "station_cod": "A529",
        "elevation": 1017,
        "location": [
            -22.395799,
            -44.961909
        ],
        "city": "Passa Quatro",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyOQ=="
    },
    {
        "station_cod": "A516",
        "elevation": 782,
        "location": [
            -20.745237,
            -46.633916
        ],
        "city": "Passos",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxNg=="
    },
    {
        "station_cod": "A562",
        "elevation": 950,
        "location": [
            -18.520667,
            -46.440611
        ],
        "city": "Patos de Minas",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2Mg=="
    },
    {
        "station_cod": "A523",
        "elevation": 978,
        "location": [
            -18.996684,
            -46.985935
        ],
        "city": "Patrocíonio",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyMw=="
    },
    {
        "station_cod": "A545",
        "elevation": 505,
        "location": [
            -17.258064,
            -44.835600
        ],
        "city": "Pirapora",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0NQ=="
    },
    {
        "station_cod": "A551",
        "elevation": 850,
        "location": [
            -15.723139,
            -42.43575
        ],
        "city": "Rio Pardo de Minas",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1MQ=="
    },
    {
        "station_cod": "A525",
        "elevation": 913,
        "location": [
            -19.875271,
            -47.434102
        ],
        "city": "Sacramento",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyNQ=="
    },
    {
        "station_cod": "A552",
        "elevation": 487,
        "location": [
            -16.160327,
            -42.310266
        ],
        "city": "Salinas",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU1Mg=="
    },
    {
        "station_cod": "A514",
        "elevation": 930,
        "location": [
            -21.106502,
            -44.250928
        ],
        "city": "São João del Rei",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxNA=="
    },
    {
        "station_cod": "A547",
        "elevation": 490,
        "location": [
            -16.362747,
            -45.123801
        ],
        "city": "São Romão",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0Nw=="
    },
    {
        "station_cod": "A561",
        "elevation": 845,
        "location": [
            -20.909892,
            -47.114259
        ],
        "city": "São Sebastião do Paraíso",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2MQ=="
    },
    {
        "station_cod": "A522",
        "elevation": 212,
        "location": [
            -17.798799,
            -40.249933
        ],
        "city": "Serra dos Aimorés",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyMg=="
    },
    {
        "station_cod": "A569",
        "elevation": 719,
        "location": [
            -19.455288,
            -44.173380
        ],
        "city": "Sete Lagoas",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2OQ=="
    },
    {
        "station_cod": "A527",
        "elevation": 467,
        "location": [
            -17.892840,
            -41.515423
        ],
        "city": "Teófilo Otoni",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyNw=="
    },
    {
        "station_cod": "A511",
        "elevation": 493,
        "location": [
            -19.573824,
            -42.622413
        ],
        "city": "Timóteo",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxMQ=="
    },
    {
        "station_cod": "A528",
        "elevation": 931,
        "location": [
            -18.200855,
            -45.459836
        ],
        "city": "Três Marias",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUyOA=="
    },
    {
        "station_cod": "A568",
        "elevation": 778,
        "location": [
            -19.710028,
            -47.961889
        ],
        "city": "Uberaba",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU2OA=="
    },
    {
        "station_cod": "A507",
        "elevation": 875,
        "location": [
            -18.917072,
            -48.255657
        ],
        "city": "Uberlândia",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUwNw=="
    },
    {
        "station_cod": "A542",
        "elevation": 641,
        "location": [
            -16.554101,
            -46.881935
        ],
        "city": "Unaí",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTU0Mg=="
    },
    {
        "station_cod": "A515",
        "elevation": 950,
        "location": [
            -21.566513,
            -45.404300
        ],
        "city": "Varginha",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxNQ=="
    },
    {
        "station_cod": "A510",
        "elevation": 698,
        "location": [
            -20.762607,
            -42.864013
        ],
        "city": "Viçosa",
        "state": "MG",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTUxMA=="
    },
    {
        "station_cod": "A756",
        "elevation": 324,
        "location": [
            -20.44444,
            -52.87583
        ],
        "city": "Água Clara",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1Ng=="
    },
    {
        "station_cod": "A750",
        "elevation": 434,
        "location": [
            -23.002530,
            -55.329357
        ],
        "city": "Amambaí",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1MA=="
    },
    {
        "station_cod": "A719",
        "elevation": 151,
        "location": [
            -20.475420,
            -55.784006
        ],
        "city": "Aquidauana",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxOQ=="
    },
    {
        "station_cod": "A759",
        "elevation": 392,
        "location": [
            -21.750123,
            -52.471294
        ],
        "city": "Bataguassu",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1OQ=="
    },
    {
        "station_cod": "A757",
        "elevation": 206,
        "location": [
            -22.101536,
            -56.540763
        ],
        "city": "Bela Vista",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1Nw=="
    },
    {
        "station_cod": "S705",
        "elevation": 345,
        "location": [
            -21.298278,
            -52.068917
        ],
        "city": "Brasilândia",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?UzcwNQ=="
    },
    {
        "station_cod": "A702",
        "elevation": 528,
        "location": [
            -20.447195,
            -54.722615
        ],
        "city": "Campo Grande",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwMg=="
    },
    {
        "station_cod": "A742",
        "elevation": 495,
        "location": [
            -19.122471,
            -51.720732
        ],
        "city": "Cassilândia",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0Mg=="
    },
    {
        "station_cod": "A730",
        "elevation": 821,
        "location": [
            -18.802187,
            -52.602620
        ],
        "city": "Chapadão do Sul",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczMA=="
    },
    {
        "station_cod": "A724",
        "elevation": 112,
        "location": [
            -18.99667,
            -57.6375
        ],
        "city": "Corumbá",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyNA=="
    },
    {
        "station_cod": "A760",
        "elevation": 727,
        "location": [
            -18.492665,
            -53.171261
        ],
        "city": "Costa Rica",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2MA=="
    },
    {
        "station_cod": "A720",
        "elevation": 251,
        "location": [
            -18.512146,
            -54.736116
        ],
        "city": "Coxim",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyMA=="
    },
    {
        "station_cod": "A721",
        "elevation": 463,
        "location": [
            -22.193920,
            -54.911355
        ],
        "city": "Dourados",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyMQ=="
    },
    {
        "station_cod": "A752",
        "elevation": 338,
        "location": [
            -23.449501,
            -54.181858
        ],
        "city": "Itaquiraí",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1Mg=="
    },
    {
        "station_cod": "A709",
        "elevation": 377,
        "location": [
            -22.300421,
            -53.822895
        ],
        "city": "Ivinhema",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwOQ=="
    },
    {
        "station_cod": "A758",
        "elevation": 252,
        "location": [
            -21.478529,
            -56.137717
        ],
        "city": "Jardim",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1OA=="
    },
    {
        "station_cod": "A749",
        "elevation": 375,
        "location": [
            -22.857210,
            -54.605634
        ],
        "city": "Juti",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0OQ=="
    },
    {
        "station_cod": "A731",
        "elevation": 389,
        "location": [
            -21.609036,
            -55.177531
        ],
        "city": "Maracaju",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczMQ=="
    },
    {
        "station_cod": "A722",
        "elevation": 132,
        "location": [
            -20.395530,
            -56.431736
        ],
        "city": "Miranda",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyMg=="
    },
    {
        "station_cod": "A717",
        "elevation": 102,
        "location": [
            -18.988681,
            -56.622868
        ],
        "city": "Nhumirim",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxNw=="
    },
    {
        "station_cod": "A710",
        "elevation": 408,
        "location": [
            -19.695517,
            -51.181769
        ],
        "city": "Paranaíba",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxMA=="
    },
    {
        "station_cod": "A703",
        "elevation": 668,
        "location": [
            -22.552448,
            -55.716317
        ],
        "city": "Ponta Porã",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwMw=="
    },
    {
        "station_cod": "A723",
        "elevation": 79,
        "location": [
            -21.705850,
            -57.886546
        ],
        "city": "Porto Murtinho",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyMw=="
    },
    {
        "station_cod": "S715",
        "elevation": 442,
        "location": [
            -20.46694,
            -53.763028
        ],
        "city": "Ribas do Rio Pardo",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?UzcxNQ=="
    },
    {
        "station_cod": "A743",
        "elevation": 324,
        "location": [
            -21.774940,
            -54.528108
        ],
        "city": "Rio Brilhante",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0Mw=="
    },
    {
        "station_cod": "S716",
        "elevation": 383,
        "location": [
            -21.305889,
            -52.820375
        ],
        "city": "Santa Rita do Rio Pardo",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?UzcxNg=="
    },
    {
        "station_cod": "A732",
        "elevation": 646,
        "location": [
            -19.420320,
            -54.553088
        ],
        "city": "São Gabriel do Oeste",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczMg=="
    },
    {
        "station_cod": "S717",
        "elevation": 374,
        "location": [
            -20.351444,
            -51.430222
        ],
        "city": "Selviria",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?UzcxNw=="
    },
    {
        "station_cod": "A751",
        "elevation": 398,
        "location": [
            -23.966893,
            -55.024227
        ],
        "city": "Sete Quedas",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1MQ=="
    },
    {
        "station_cod": "A754",
        "elevation": 471,
        "location": [
            -20.981637,
            -54.971870
        ],
        "city": "Sidrolândia",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1NA=="
    },
    {
        "station_cod": "A761",
        "elevation": 495,
        "location": [
            -17.635277,
            -54.760470
        ],
        "city": "Sonora",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2MQ=="
    },
    {
        "station_cod": "A704",
        "elevation": 329,
        "location": [
            -20.7900,
            -51.7122
        ],
        "city": "Três Lagoas",
        "state": "MS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwNA=="
    },
    {
        "station_cod": "A908",
        "elevation": 440,
        "location": [
            -14.016496,
            -52.211690
        ],
        "city": "Água Boa",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwOA=="
    },
    {
        "station_cod": "A924",
        "elevation": 292,
        "location": [
            -10.077262,
            -56.179221
        ],
        "city": "Alta Floresta",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyNA=="
    },
    {
        "station_cod": "A909",
        "elevation": 753,
        "location": [
            -17.339359,
            -53.224449
        ],
        "city": "Alto Araguaia",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwOQ=="
    },
    {
        "station_cod": "A934",
        "elevation": 862,
        "location": [
            -17.841011,
            -53.289474
        ],
        "city": "Alto Taquari",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzNA=="
    },
    {
        "station_cod": "A910",
        "elevation": 218,
        "location": [
            -9.563392,
            -57.393578
        ],
        "city": "Apiacás",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxMA=="
    },
    {
        "station_cod": "A941",
        "elevation": 124,
        "location": [
            -16.074740,
            -57.693047
        ],
        "city": "Cáceres",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTk0MQ=="
    },
    {
        "station_cod": "A905",
        "elevation": 525,
        "location": [
            -13.785907,
            -57.838485
        ],
        "city": "Campo Novo dos Parecis",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwNQ=="
    },
    {
        "station_cod": "A912",
        "elevation": 748,
        "location": [
            -15.531431,
            -55.135649
        ],
        "city": "Campo Verde",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxMg=="
    },
    {
        "station_cod": "A926",
        "elevation": 294,
        "location": [
            -9.970586,
            -55.827543
        ],
        "city": "Carlinda",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyNg=="
    },
    {
        "station_cod": "A913",
        "elevation": 577,
        "location": [
            -13.708046,
            -59.762385
        ],
        "city": "Comodoro",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxMw=="
    },
    {
        "station_cod": "A919",
        "elevation": 265,
        "location": [
            -9.906296,
            -58.572235
        ],
        "city": "Cotriguaçu",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxOQ=="
    },
    {
        "station_cod": "A901",
        "elevation": 242,
        "location": [
            -15.559295,
            -56.062951
        ],
        "city": "Cuiabá",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwMQ=="
    },
    {
        "station_cod": "A930",
        "elevation": 376,
        "location": [
            -13.184857,
            -53.257366
        ],
        "city": "Gaucha do Norte",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzMA=="
    },
    {
        "station_cod": "A906",
        "elevation": 284,
        "location": [
            -9.952594,
            -54.897834
        ],
        "city": "Guarantã do Norte",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwNg=="
    },
    {
        "station_cod": "A932",
        "elevation": 525,
        "location": [
            -16.341587,
            -53.766089
        ],
        "city": "Guiratinga",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzMg=="
    },
    {
        "station_cod": "A933",
        "elevation": 593,
        "location": [
            -17.175051,
            -54.501690
        ],
        "city": "Itiquira",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzMw=="
    },
    {
        "station_cod": "A914",
        "elevation": 263,
        "location": [
            -11.280158,
            -57.526641
        ],
        "city": "Juara",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxNA=="
    },
    {
        "station_cod": "A920",
        "elevation": 365,
        "location": [
            -11.375126,
            -58.774785
        ],
        "city": "Juína",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyMA=="
    },
    {
        "station_cod": "A928",
        "elevation": 334,
        "location": [
            -13.038642,
            -57.092201
        ],
        "city": "Nova Maringá",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyOA=="
    },
    {
        "station_cod": "A929",
        "elevation": 466,
        "location": [
            -13.411105,
            -54.752144
        ],
        "city": "Nova Ubiratã",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyOQ=="
    },
    {
        "station_cod": "A927",
        "elevation": 426,
        "location": [
            -12.521901,
            -58.231401
        ],
        "city": "Novo Mundo",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyNw=="
    },
    {
        "station_cod": "A915",
        "elevation": 477,
        "location": [
            -14.421492,
            -54.036055
        ],
        "city": "Paranatinga",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxNQ=="
    },
    {
        "station_cod": "A937",
        "elevation": 273,
        "location": [
            -15.234582,
            -59.346215
        ],
        "city": "Pontes e Lacerda",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzNw=="
    },
    {
        "station_cod": "A935",
        "elevation": 148,
        "location": [
            -15.324728,
            -57.225845
        ],
        "city": "Porto Estrela",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzNQ=="
    },
    {
        "station_cod": "A923",
        "elevation": 680,
        "location": [
            -15.579944,
            -54.381001
        ],
        "city": "Primavera do Leste",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyMw=="
    },
    {
        "station_cod": "A916",
        "elevation": 361,
        "location": [
            -12.627315,
            -52.220891
        ],
        "city": "Querência",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxNg=="
    },
    {
        "station_cod": "A907",
        "elevation": 290,
        "location": [
            -16.462419,
            -54.580151
        ],
        "city": "Rondonópolis",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwNw=="
    },
    {
        "station_cod": "A944",
        "elevation": 195,
        "location": [
            -14.828972,
            -56.441944
        ],
        "city": "Rosário Oeste",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTk0NA=="
    },
    {
        "station_cod": "A936",
        "elevation": 301,
        "location": [
            -15.124811,
            -58.127092
        ],
        "city": "Salto do Céu",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzNg=="
    },
    {
        "station_cod": "A931",
        "elevation": 664,
        "location": [
            -14.927883,
            -53.883643
        ],
        "city": "Santo Antônio do Leste",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzMQ=="
    },
    {
        "station_cod": "A921",
        "elevation": 201,
        "location": [
            -11.619023,
            -50.727856
        ],
        "city": "São Félix do Araguaia",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyMQ=="
    },
    {
        "station_cod": "A903",
        "elevation": 340,
        "location": [
            -13.453981,
            -56.677323
        ],
        "city": "São José do Rio Claro",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwMw=="
    },
    {
        "station_cod": "A942",
        "elevation": 300,
        "location": [
            -10.484167,
            -52.372501
        ],
        "city": "São José do Xingu",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTk0Mg=="
    },
    {
        "station_cod": "A911",
        "elevation": 555,
        "location": [
            -13.304085,
            -58.763525
        ],
        "city": "Sapezal",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxMQ=="
    },
    {
        "station_cod": "A943",
        "elevation": 441,
        "location": [
            -11.987911,
            -51.426089
        ],
        "city": "Serra Nova Dourada",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTk0Mw=="
    },
    {
        "station_cod": "A917",
        "elevation": 367,
        "location": [
            -11.982245,
            -55.565993
        ],
        "city": "Sinop",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkxNw=="
    },
    {
        "station_cod": "A904",
        "elevation": 379,
        "location": [
            -12.555107,
            -55.722863
        ],
        "city": "Sorriso",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwNA=="
    },
    {
        "station_cod": "A902",
        "elevation": 440,
        "location": [
            -14.650117,
            -57.431556
        ],
        "city": "Tangará da Serra",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkwMg=="
    },
    {
        "station_cod": "A922",
        "elevation": 213,
        "location": [
            -15.062696,
            -59.872921
        ],
        "city": "Vila Bela da Santíssima Trindade",
        "state": "MT",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyMg=="
    },
    {
        "station_cod": "A253",
        "elevation": 191,
        "location": [
            -3.270251,
            -52.394806
        ],
        "city": "Altamira",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI1Mw=="
    },
    {
        "station_cod": "A201",
        "elevation": 21,
        "location": [
            -1.411228,
            -48.439512
        ],
        "city": "Belém",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIwMQ=="
    },
    {
        "station_cod": "A226",
        "elevation": 41,
        "location": [
            -1.047258,
            -46.785790
        ],
        "city": "Bragança",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyNg=="
    },
    {
        "station_cod": "A228",
        "elevation": 11,
        "location": [
            -1.680251,
            -50.478139
        ],
        "city": "Breves",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyOA=="
    },
    {
        "station_cod": "A236",
        "elevation": 10,
        "location": [
            -2.239653,
            -49.499827
        ],
        "city": "Cametá",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzNg=="
    },
    {
        "station_cod": "A248",
        "elevation": 79,
        "location": [
            -1.734766,
            -47.057500
        ],
        "city": "Capitão Poço",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0OA=="
    },
    {
        "station_cod": "A202",
        "elevation": 47,
        "location": [
            -1.300875,
            -47.947967
        ],
        "city": "Castanhal",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIwMg=="
    },
    {
        "station_cod": "A241",
        "elevation": 176,
        "location": [
            -8.30361,
            -49.28277
        ],
        "city": "Conceição do Araguaia",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0MQ=="
    },
    {
        "station_cod": "A252",
        "elevation": 251,
        "location": [
            -4.280556,
            -47.563972
        ],
        "city": "Dom Eliseu",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI1Mg=="
    },
    {
        "station_cod": "A231",
        "elevation": 24,
        "location": [
            -4.276978,
            -55.993087
        ],
        "city": "Itaituba",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzMQ=="
    },
    {
        "station_cod": "A240",
        "elevation": 117,
        "location": [
            -5.366447,
            -49.051166
        ],
        "city": "Marabá",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0MA=="
    },
    {
        "station_cod": "A209",
        "elevation": 252,
        "location": [
            -3.510943,
            -52.963450
        ],
        "city": "Medicilandia",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIwOQ=="
    },
    {
        "station_cod": "A246",
        "elevation": 260,
        "location": [
            -6.320067,
            -55.787783
        ],
        "city": "Mina Palito",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0Ng=="
    },
    {
        "station_cod": "A239",
        "elevation": 101,
        "location": [
            -2.000054,
            -54.076479
        ],
        "city": "Monte Alegre",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzOQ=="
    },
    {
        "station_cod": "A235",
        "elevation": 101,
        "location": [
            -4.243989,
            -49.939308
        ],
        "city": "Novo Repartimento",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzNQ=="
    },
    {
        "station_cod": "A232",
        "elevation": 90,
        "location": [
            -1.880789,
            -55.519856
        ],
        "city": "Óbidos",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzMg=="
    },
    {
        "station_cod": "A210",
        "elevation": 89,
        "location": [
            -3.843701,
            -50.638098
        ],
        "city": "Pacajá",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxMA=="
    },
    {
        "station_cod": "A212",
        "elevation": 113,
        "location": [
            -2.990361,
            -47.407833
        ],
        "city": "Paragominas",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxMg=="
    },
    {
        "station_cod": "A211",
        "elevation": 100,
        "location": [
            -3.864040,
            -54.216416
        ],
        "city": "Placas",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxMQ=="
    },
    {
        "station_cod": "A245",
        "elevation": 19,
        "location": [
            -1.822167,
            -52.111751
        ],
        "city": "Porto de Moz",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0NQ=="
    },
    {
        "station_cod": "A254",
        "elevation": 199,
        "location": [
            -8.043250,
            -50.006917
        ],
        "city": "Redenção",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI1NA=="
    },
    {
        "station_cod": "A214",
        "elevation": 203,
        "location": [
            -4.827501,
            -48.173556
        ],
        "city": "Rondon do Pará",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxNA=="
    },
    {
        "station_cod": "A215",
        "elevation": 23,
        "location": [
            -0.618884,
            -47.356596
        ],
        "city": "Salinópolis",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxNQ=="
    },
    {
        "station_cod": "A233",
        "elevation": 177,
        "location": [
            -9.338611,
            -50.35028
        ],
        "city": "Santana do Araguaia",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzMw=="
    },
    {
        "station_cod": "A250",
        "elevation": 137,
        "location": [
            -2.502572,
            -54.720279
        ],
        "city": "Santarém",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI1MA=="
    },
    {
        "station_cod": "A216",
        "elevation": 211,
        "location": [
            -6.639622,
            -51.956966
        ],
        "city": "São Félix do Xingu",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxNg=="
    },
    {
        "station_cod": "A230",
        "elevation": 707,
        "location": [
            -6.077427,
            -50.142265
        ],
        "city": "Serra dos Carajás",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzMA=="
    },
    {
        "station_cod": "A227",
        "elevation": 13,
        "location": [
            -0.727827,
            -48.515795
        ],
        "city": "Soure",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyNw=="
    },
    {
        "station_cod": "A213",
        "elevation": 43,
        "location": [
            -2.592606,
            -48.360585
        ],
        "city": "Tomé Açu",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIxMw=="
    },
    {
        "station_cod": "A234",
        "elevation": 321,
        "location": [
            -6.743208,
            -51.141899
        ],
        "city": "Tucumã",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIzNA=="
    },
    {
        "station_cod": "A229",
        "elevation": 138,
        "location": [
            -3.822760,
            -49.674956
        ],
        "city": "Tucuruí",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTIyOQ=="
    },
    {
        "station_cod": "A247",
        "elevation": 245,
        "location": [
            -7.110518,
            -49.926072
        ],
        "city": "Xinguara",
        "state": "PA",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTI0Nw=="
    },
    {
        "station_cod": "A310",
        "elevation": 573,
        "location": [
            -6.975451,
            -35.718128
        ],
        "city": "Areia",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxMA=="
    },
    {
        "station_cod": "A348",
        "elevation": 392,
        "location": [
            -7.483206,
            -36.286469
        ],
        "city": "Cabaceiras",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0OA=="
    },
    {
        "station_cod": "A352",
        "elevation": 136,
        "location": [
            -6.561813,
            -35.135316
        ],
        "city": "Camaratuba",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1Mg=="
    },
    {
        "station_cod": "A313",
        "elevation": 546,
        "location": [
            -7.225574,
            -35.904831
        ],
        "city": "Campina Grande",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxMw=="
    },
    {
        "station_cod": "A373",
        "elevation": 292,
        "location": [
            -7.318459,
            -38.140843
        ],
        "city": "Itaporanga",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM3Mw=="
    },
    {
        "station_cod": "A320",
        "elevation": 34,
        "location": [
            -7.165409,
            -34.815627
        ],
        "city": "João Pessoa",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyMA=="
    },
    {
        "station_cod": "A334",
        "elevation": 606,
        "location": [
            -7.894465,
            -37.124704
        ],
        "city": "Monteiro",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzNA=="
    },
    {
        "station_cod": "A321",
        "elevation": 264,
        "location": [
            -7.079836,
            -37.272817
        ],
        "city": "Patos",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyMQ=="
    },
    {
        "station_cod": "A333",
        "elevation": 237,
        "location": [
            -6.835777,
            -38.311583
        ],
        "city": "São Gonçalo",
        "state": "PB",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzMw=="
    },
    {
        "station_cod": "A309",
        "elevation": 684,
        "location": [
            -8.433544,
            -37.055477
        ],
        "city": "Arco Verde",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwOQ=="
    },
    {
        "station_cod": "A329",
        "elevation": 343,
        "location": [
            -8.504000,
            -39.315280
        ],
        "city": "Cabrobó",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyOQ=="
    },
    {
        "station_cod": "A341",
        "elevation": 852,
        "location": [
            -8.365147,
            -36.028461
        ],
        "city": "Caruaru",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0MQ=="
    },
    {
        "station_cod": "A351",
        "elevation": 327,
        "location": [
            -8.598785,
            -38.584062
        ],
        "city": "Floresta",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1MQ=="
    },
    {
        "station_cod": "A322",
        "elevation": 828,
        "location": [
            -8.910950,
            -36.493381
        ],
        "city": "Garanhuns",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyMg=="
    },
    {
        "station_cod": "A349",
        "elevation": 434,
        "location": [
            -8.509552,
            -37.711591
        ],
        "city": "Ibimirim",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0OQ=="
    },
    {
        "station_cod": "A366",
        "elevation": 458,
        "location": [
            -7.885833,
            -40.102683
        ],
        "city": "Ouricuri",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2Ng=="
    },
    {
        "station_cod": "A357",
        "elevation": 164,
        "location": [
            -8.666667,
            -35.567921
        ],
        "city": "Palmares",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1Nw=="
    },
    {
        "station_cod": "A307",
        "elevation": 373,
        "location": [
            -9.388323,
            -40.523262
        ],
        "city": "Petrolina",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwNw=="
    },
    {
        "station_cod": "A301",
        "elevation": 11,
        "location": [
            -8.059280,
            -34.959239
        ],
        "city": "Recife",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwMQ=="
    },
    {
        "station_cod": "A370",
        "elevation": 447,
        "location": [
            -8.0580556,
            -39.096111
        ],
        "city": "Salgueiro",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM3MA=="
    },
    {
        "station_cod": "A302",
        "elevation": 2,
        "location": [
            0.916877,
            -29.345904
        ],
        "city": "São Pedro e São Paulo",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwMg=="
    },
    {
        "station_cod": "A350",
        "elevation": 499,
        "location": [
            -7.954277,
            -38.295082
        ],
        "city": "Serra Talhada",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1MA=="
    },
    {
        "station_cod": "A328",
        "elevation": 421,
        "location": [
            -7.839628,
            -35.801056
        ],
        "city": "Surubim",
        "state": "PE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyOA=="
    },
    {
        "station_cod": "A336",
        "elevation": 261,
        "location": [
            -8.441598,
            -43.865443
        ],
        "city": "Alvorada do Gurguéia",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzNg=="
    },
    {
        "station_cod": "A375",
        "elevation": 519,
        "location": [
            -8.333531,
            -45.094626
        ],
        "city": "Baixa Grande do Ribeiro",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM3NQ=="
    },
    {
        "station_cod": "A326",
        "elevation": 296,
        "location": [
            -9.083251,
            -44.326470
        ],
        "city": "Bom Jesus do Piauí",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMyNg=="
    },
    {
        "station_cod": "A376",
        "elevation": 125,
        "location": [
            -4.864178,
            -42.145553
        ],
        "city": "Campo Maior",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM3Ng=="
    },
    {
        "station_cod": "A365",
        "elevation": 312,
        "location": [
            -8.117939,
            -42.975721
        ],
        "city": "Canto do Buriti",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2NQ=="
    },
    {
        "station_cod": "A337",
        "elevation": 515,
        "location": [
            -9.285880,
            -43.324438
        ],
        "city": "Caracol",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzNw=="
    },
    {
        "station_cod": "A361",
        "elevation": 269,
        "location": [
            -5.349228,
            -41.512274
        ],
        "city": "Castelo do Piauí",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2MQ=="
    },
    {
        "station_cod": "A374",
        "elevation": 452,
        "location": [
            -10.429169,
            -45.173039
        ],
        "city": "Corrente",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM3NA=="
    },
    {
        "station_cod": "A311",
        "elevation": 126,
        "location": [
            -6.761438,
            -43.003396
        ],
        "city": "Floriano",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxMQ=="
    },
    {
        "station_cod": "A364",
        "elevation": 425,
        "location": [
            -9.875196,
            -45.345805
        ],
        "city": "Gilbués",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2NA=="
    },
    {
        "station_cod": "A354",
        "elevation": 154,
        "location": [
            -6.974135,
            -42.146831
        ],
        "city": "Oeiras",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM1NA=="
    },
    {
        "station_cod": "A308",
        "elevation": 52,
        "location": [
            -3.086656,
            -41.783139
        ],
        "city": "Parnaíba",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwOA=="
    },
    {
        "station_cod": "A330",
        "elevation": 376,
        "location": [
            -8.132288,
            -41.142945
        ],
        "city": "Paulistana",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzMA=="
    },
    {
        "station_cod": "A343",
        "elevation": 233,
        "location": [
            -7.071016,
            -41.404042
        ],
        "city": "Picos",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0Mw=="
    },
    {
        "station_cod": "A335",
        "elevation": 158,
        "location": [
            -4.276047,
            -41.794568
        ],
        "city": "Piripiri",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzNQ=="
    },
    {
        "station_cod": "A331",
        "elevation": 237,
        "location": [
            -8.364977,
            -42.250369
        ],
        "city": "São João do Piauí",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMzMQ=="
    },
    {
        "station_cod": "A362",
        "elevation": 296,
        "location": [
            -5.911033,
            -42.718729
        ],
        "city": "São Pedro do Piaui",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2Mg=="
    },
    {
        "station_cod": "A345",
        "elevation": 383,
        "location": [
            -9.033211,
            -42.701112
        ],
        "city": "São Raimundo Nonato",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0NQ=="
    },
    {
        "station_cod": "A312",
        "elevation": 75,
        "location": [
            -5.034769,
            -42.801341
        ],
        "city": "Teresina",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxMg=="
    },
    {
        "station_cod": "A346",
        "elevation": 399,
        "location": [
            -7.441420,
            -44.345055
        ],
        "city": "Uruçui",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0Ng=="
    },
    {
        "station_cod": "A363",
        "elevation": 313,
        "location": [
            -6.399274,
            -41.739953
        ],
        "city": "Valença do Piauí",
        "state": "PI",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2Mw=="
    },
    {
        "station_cod": "B803",
        "elevation": 598,
        "location": [
            -24.570861,
            -52.800256
        ],
        "city": "Campina da Lagoa",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QjgwMw=="
    },
    {
        "station_cod": "A819",
        "elevation": 994,
        "location": [
            -24.786954,
            -49.999266
        ],
        "city": "Castro",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxOQ=="
    },
    {
        "station_cod": "A869",
        "elevation": 366,
        "location": [
            -23.359156,
            -52.931912
        ],
        "city": "Cidade Gaúcha",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2OQ=="
    },
    {
        "station_cod": "A876",
        "elevation": 966,
        "location": [
            -26.417200,
            -52.348741
        ],
        "city": "Clevelândia",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3Ng=="
    },
    {
        "station_cod": "B806",
        "elevation": 950,
        "location": [
            -25.322464,
            -49.157733
        ],
        "city": "Colombo",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QjgwNg=="
    },
    {
        "station_cod": "A807",
        "elevation": 923,
        "location": [
            -25.448688,
            -49.230602
        ],
        "city": "Curitiba",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwNw=="
    },
    {
        "station_cod": "A849",
        "elevation": 368,
        "location": [
            -22.639366,
            -52.890156
        ],
        "city": "Diamante do Norte",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0OQ=="
    },
    {
        "station_cod": "A843",
        "elevation": 546,
        "location": [
            -25.699063,
            -53.095273
        ],
        "city": "Dois Vizinhos",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0Mw=="
    },
    {
        "station_cod": "A846",
        "elevation": 235,
        "location": [
            -25.601834,
            -54.483065
        ],
        "city": "Foz do Iguaçu",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0Ng=="
    },
    {
        "station_cod": "A875",
        "elevation": 1009,
        "location": [
            -26.398473,
            -51.353670
        ],
        "city": "General Carneiro",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3NQ=="
    },
    {
        "station_cod": "A824",
        "elevation": 381,
        "location": [
            -23.390380,
            -53.635933
        ],
        "city": "Icaraíma",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyNA=="
    },
    {
        "station_cod": "A823",
        "elevation": 1209,
        "location": [
            -25.567879,
            -51.077946
        ],
        "city": "Inácio Martins",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyMw=="
    },
    {
        "station_cod": "A818",
        "elevation": 804,
        "location": [
            -25.010757,
            -50.853853
        ],
        "city": "Ivaí",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxOA=="
    },
    {
        "station_cod": "A871",
        "elevation": 693,
        "location": [
            -23.773341,
            -50.180570
        ],
        "city": "Japira",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3MQ=="
    },
    {
        "station_cod": "A821",
        "elevation": 513,
        "location": [
            -23.505266,
            -49.946387
        ],
        "city": "Joaquim Távora",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyMQ=="
    },
    {
        "station_cod": "B804",
        "elevation": 835,
        "location": [
            -25.368944,
            -52.391944
        ],
        "city": "Laranjeiras do Sul",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QjgwNA=="
    },
    {
        "station_cod": "A820",
        "elevation": 392,
        "location": [
            -24.533303,
            -54.019248
        ],
        "city": "Marechal Cândido Rondon",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyMA=="
    },
    {
        "station_cod": "A835",
        "elevation": 549,
        "location": [
            -23.405357,
            -51.932828
        ],
        "city": "Maringá",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzNQ=="
    },
    {
        "station_cod": "A873",
        "elevation": 50,
        "location": [
            -25.508935,
            -48.808681
        ],
        "city": "Morretes",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3Mw=="
    },
    {
        "station_cod": "A842",
        "elevation": 664,
        "location": [
            -23.415284,
            -50.577744
        ],
        "city": "Nova Fátima",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0Mg=="
    },
    {
        "station_cod": "A822",
        "elevation": 656,
        "location": [
            -24.437346,
            -51.963020
        ],
        "city": "Nova Tebas",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyMg=="
    },
    {
        "station_cod": "A850",
        "elevation": 309,
        "location": [
            -22.658273,
            -52.134526
        ],
        "city": "Paranapoema",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1MA=="
    },
    {
        "station_cod": "A855",
        "elevation": 399,
        "location": [
            -25.721863,
            -53.747920
        ],
        "city": "Planalto",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1NQ=="
    },
    {
        "station_cod": "A874",
        "elevation": 780,
        "location": [
            -25.835604,
            -50.368994
        ],
        "city": "São Mateus do Sul",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3NA=="
    },
    {
        "station_cod": "A872",
        "elevation": 1093,
        "location": [
            -24.280394,
            -50.210150
        ],
        "city": "Ventania",
        "state": "PR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3Mg=="
    },
    {
        "station_cod": "A628",
        "elevation": 6,
        "location": [
            -22.975694,
            -44.303444
        ],
        "city": "Angra dos Reis",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyOA=="
    },
    {
        "station_cod": "A606",
        "elevation": 3,
        "location": [
            -22.975468,
            -42.021450
        ],
        "city": "Arraial do Cabo",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYwNg=="
    },
    {
        "station_cod": "A604",
        "elevation": 60,
        "location": [
            -21.587729,
            -41.958327
        ],
        "city": "Cambuci",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYwNA=="
    },
    {
        "station_cod": "A607",
        "elevation": 17,
        "location": [
            -21.714767,
            -41.344017
        ],
        "city": "Campos dos Goytacazes",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYwNw=="
    },
    {
        "station_cod": "A620",
        "elevation": 7,
        "location": [
            -22.041647,
            -41.051871
        ],
        "city": "Campos - São Tomé",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyMA=="
    },
    {
        "station_cod": "A629",
        "elevation": 293,
        "location": [
            -21.938744,
            -42.600936
        ],
        "city": "Carmo",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyOQ=="
    },
    {
        "station_cod": "A603",
        "elevation": 24,
        "location": [
            -22.589806,
            -43.282233
        ],
        "city": "Duque de Caxias - Xerém",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYwMw=="
    },
    {
        "station_cod": "A635",
        "elevation": 2450,
        "location": [
            -22.373944,
            -44.703111
        ],
        "city": "Itatiaia - Parque Nacional",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYzNQ=="
    },
    {
        "station_cod": "A608",
        "elevation": 25,
        "location": [
            -22.376318,
            -41.812053
        ],
        "city": "Macaé",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYwOA=="
    },
    {
        "station_cod": "A627",
        "elevation": 6,
        "location": [
            -22.867389,
            -43.1020556
        ],
        "city": "Niterói",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyNw=="
    },
    {
        "station_cod": "A624",
        "elevation": 1065,
        "location": [
            -22.334839,
            -42.676932
        ],
        "city": "Nova Friburgo-Salinas",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyNA=="
    },
    {
        "station_cod": "A619",
        "elevation": 3,
        "location": [
            -23.223540,
            -44.726863
        ],
        "city": "Paraty",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxOQ=="
    },
    {
        "station_cod": "A610",
        "elevation": 1758,
        "location": [
            -22.464889,
            -43.291505
        ],
        "city": "Petrópolis - Pico do Couto",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxMA=="
    },
    {
        "station_cod": "A609",
        "elevation": 439,
        "location": [
            -22.450924,
            -44.444786
        ],
        "city": "Resende",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYwOQ=="
    },
    {
        "station_cod": "A626",
        "elevation": 516,
        "location": [
            -22.653579,
            -44.040916
        ],
        "city": "Rio Claro (Passa Três)",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyNg=="
    },
    {
        "station_cod": "A652",
        "elevation": 26,
        "location": [
            -22.988286,
            -43.190436
        ],
        "city": "Rio de Janeiro - Forte de Copacabana",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTY1Mg=="
    },
    {
        "station_cod": "A636",
        "elevation": 20,
        "location": [
            -22.939883,
            -43.402897
        ],
        "city": "Rio de Janeiro-Jacarepaguá",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYzNg=="
    },
    {
        "station_cod": "A602",
        "elevation": 9,
        "location": [
            -23.050334,
            -43.595685
        ],
        "city": "Rio de Janeiro - Marambaia",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYwMg=="
    },
    {
        "station_cod": "A621",
        "elevation": 30,
        "location": [
            -22.861322,
            -43.411410
        ],
        "city": "Rio de Janeiro - Vila Militar",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyMQ=="
    },
    {
        "station_cod": "A630",
        "elevation": 517,
        "location": [
            -21.950592,
            -42.010489
        ],
        "city": "Santa Maria Madalena",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYzMA=="
    },
    {
        "station_cod": "A667",
        "elevation": 26,
        "location": [
            -22.871321,
            -42.609219
        ],
        "city": "Saquarema - Sampaio Correia",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTY2Nw=="
    },
    {
        "station_cod": "A601",
        "elevation": 35,
        "location": [
            -22.757868,
            -43.684843
        ],
        "city": "Seropédica - Ecologia Agrícola",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYwMQ=="
    },
    {
        "station_cod": "A659",
        "elevation": 19,
        "location": [
            -22.645911,
            -42.415775
        ],
        "city": "Silva Jardim",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTY1OQ=="
    },
    {
        "station_cod": "A618",
        "elevation": 991,
        "location": [
            -22.448922,
            -42.987146
        ],
        "city": "Teresópolis - Parque Nacional",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxOA=="
    },
    {
        "station_cod": "A625",
        "elevation": 305,
        "location": [
            -22.098391,
            -43.208574
        ],
        "city": "Três Rios",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYyNQ=="
    },
    {
        "station_cod": "A611",
        "elevation": 367,
        "location": [
            -22.358094,
            -43.695656
        ],
        "city": "Valença",
        "state": "RJ",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTYxMQ=="
    },
    {
        "station_cod": "A340",
        "elevation": 131,
        "location": [
            -5.626559,
            -37.814991
        ],
        "city": "Apodi",
        "state": "RN",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0MA=="
    },
    {
        "station_cod": "A316",
        "elevation": 171,
        "location": [
            -6.467474,
            -37.084931
        ],
        "city": "Caicó",
        "state": "RN",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxNg=="
    },
    {
        "station_cod": "A344",
        "elevation": 10,
        "location": [
            -5.159925,
            -35.487616
        ],
        "city": "Calcanhar",
        "state": "RN",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM0NA=="
    },
    {
        "station_cod": "A372",
        "elevation": 19,
        "location": [
            -5.534867,
            -36.872314
        ],
        "city": "Ipanguaçu",
        "state": "RN",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM3Mg=="
    },
    {
        "station_cod": "A317",
        "elevation": 17,
        "location": [
            -5.151035,
            -36.573142
        ],
        "city": "Macau",
        "state": "RN",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxNw=="
    },
    {
        "station_cod": "A318",
        "elevation": 29,
        "location": [
            -4.904087,
            -37.366943
        ],
        "city": "Mossoró",
        "state": "RN",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMxOA=="
    },
    {
        "station_cod": "A304",
        "elevation": 47,
        "location": [
            -5.837187,
            -35.207921
        ],
        "city": "Natal",
        "state": "RN",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTMwNA=="
    },
    {
        "station_cod": "A367",
        "elevation": 227,
        "location": [
            -6.227922,
            -36.026587
        ],
        "city": "Santa Cruz",
        "state": "RN",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTM2Nw=="
    },
    {
        "station_cod": "A940",
        "elevation": 128,
        "location": [
            -9.949001,
            -62.961873
        ],
        "city": "Ariquemes",
        "state": "RO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTk0MA=="
    },
    {
        "station_cod": "A939",
        "elevation": 184,
        "location": [
            -11.445837,
            -61.434146
        ],
        "city": "Cacoal",
        "state": "RO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzOQ=="
    },
    {
        "station_cod": "A925",
        "elevation": 87,
        "location": [
            -8.793662,
            -63.845931
        ],
        "city": "Porto Velho",
        "state": "RO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkyNQ=="
    },
    {
        "station_cod": "A938",
        "elevation": 583,
        "location": [
            -12.734862,
            -60.157784
        ],
        "city": "Vilhena",
        "state": "RO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTkzOA=="
    },
    {
        "station_cod": "A135",
        "elevation": 82,
        "location": [
            2.816897,
            -60.690821
        ],
        "city": "Boa Vista",
        "state": "RR",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTEzNQ=="
    },
    {
        "station_cod": "A826",
        "elevation": 121,
        "location": [
            -29.709083,
            -55.525486
        ],
        "city": "Alegrete",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyNg=="
    },
    {
        "station_cod": "A827",
        "elevation": 226,
        "location": [
            -31.347801,
            -54.013292
        ],
        "city": "Bagé",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyNw=="
    },
    {
        "station_cod": "A840",
        "elevation": 623,
        "location": [
            -29.164581,
            -51.534202
        ],
        "city": "Bento Gonçalves",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0MA=="
    },
    {
        "station_cod": "A812",
        "elevation": 421,
        "location": [
            -30.545317,
            -53.467050
        ],
        "city": "Caçapava do Sul",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxMg=="
    },
    {
        "station_cod": "A838",
        "elevation": 92,
        "location": [
            -30.807953,
            -51.834240
        ],
        "city": "Camaquã",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzOA=="
    },
    {
        "station_cod": "A897",
        "elevation": 1017,
        "location": [
            -29.049125,
            -50.149636
        ],
        "city": "Cambará do Sul",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg5Nw=="
    },
    {
        "station_cod": "A884",
        "elevation": 23,
        "location": [
            -29.674293,
            -51.064042
        ],
        "city": "Campo Bom",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg4NA=="
    },
    {
        "station_cod": "A879",
        "elevation": 831,
        "location": [
            -29.368788,
            -50.827231
        ],
        "city": "Canela",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3OQ=="
    },
    {
        "station_cod": "A811",
        "elevation": 447,
        "location": [
            -31.403299,
            -52.700699
        ],
        "city": "Canguçu",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxMQ=="
    },
    {
        "station_cod": "A853",
        "elevation": 427,
        "location": [
            -28.603440,
            -53.673597
        ],
        "city": "Cruz Alta",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1Mw=="
    },
    {
        "station_cod": "A881",
        "elevation": 152,
        "location": [
            -31.002528,
            -54.618139
        ],
        "city": "Dom Pedrito",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg4MQ=="
    },
    {
        "station_cod": "A893",
        "elevation": 428,
        "location": [
            -30.543164,
            -52.524669
        ],
        "city": "Encruzilhada do Sul",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg5Mw=="
    },
    {
        "station_cod": "A828",
        "elevation": 777,
        "location": [
            -27.657710,
            -52.305805
        ],
        "city": "Erechim",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyOA=="
    },
    {
        "station_cod": "A854",
        "elevation": 489,
        "location": [
            -27.395686,
            -53.429421
        ],
        "city": "Frederico Westphalen",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1NA=="
    },
    {
        "station_cod": "A883",
        "elevation": 455,
        "location": [
            -28.653458,
            -53.111881
        ],
        "city": "Ibirubá",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg4Mw=="
    },
    {
        "station_cod": "A836",
        "elevation": 31,
        "location": [
            -32.534825,
            -53.375860
        ],
        "city": "Jaguarão",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzNg=="
    },
    {
        "station_cod": "A844",
        "elevation": 834,
        "location": [
            -28.222381,
            -51.512845
        ],
        "city": "Lagoa Vemelha",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0NA=="
    },
    {
        "station_cod": "A878",
        "elevation": 4,
        "location": [
            -31.248279,
            -50.906279
        ],
        "city": "Mostardas",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3OA=="
    },
    {
        "station_cod": "A856",
        "elevation": 614,
        "location": [
            -27.920379,
            -53.318049
        ],
        "city": "Palmeira das Missões",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1Ng=="
    },
    {
        "station_cod": "A839",
        "elevation": 681,
        "location": [
            -28.226805,
            -52.403582
        ],
        "city": "Passo Fundo",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzOQ=="
    },
    {
        "station_cod": "A801",
        "elevation": 41,
        "location": [
            -30.053536,
            -51.174766
        ],
        "city": "Porto Alegre",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwMQ=="
    },
    {
        "station_cod": "A831",
        "elevation": 113,
        "location": [
            -30.368578,
            -56.437115
        ],
        "city": "Quaraí",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzMQ=="
    },
    {
        "station_cod": "A802",
        "elevation": 5,
        "location": [
            -32.078780,
            -52.167738
        ],
        "city": "Rio Grande",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwMg=="
    },
    {
        "station_cod": "A813",
        "elevation": 107,
        "location": [
            -29.872113,
            -52.381980
        ],
        "city": "Rio Pardo",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxMw=="
    },
    {
        "station_cod": "A803",
        "elevation": 103,
        "location": [
            -29.724960,
            -53.720469
        ],
        "city": "Santa Maria",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwMw=="
    },
    {
        "station_cod": "A804",
        "elevation": 328,
        "location": [
            -30.842449,
            -55.613089
        ],
        "city": "Santana do Livramento",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwNA=="
    },
    {
        "station_cod": "A810",
        "elevation": 273,
        "location": [
            -27.890463,
            -54.480014
        ],
        "city": "Santa Rosa",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxMA=="
    },
    {
        "station_cod": "A899",
        "elevation": 7,
        "location": [
            -33.742297,
            -53.372218
        ],
        "city": "Santa Vitória do Palmar (Barra do Chuí)",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg5OQ=="
    },
    {
        "station_cod": "A833",
        "elevation": 390,
        "location": [
            -29.191599,
            -54.885653
        ],
        "city": "Santiago",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzMw=="
    },
    {
        "station_cod": "A805",
        "elevation": 490,
        "location": [
            -27.854345,
            -53.791179
        ],
        "city": "Santo Augusto",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwNQ=="
    },
    {
        "station_cod": "A830",
        "elevation": 81,
        "location": [
            -28.650092,
            -56.016291
        ],
        "city": "São Borja",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzMA=="
    },
    {
        "station_cod": "A832",
        "elevation": 115,
        "location": [
            -30.341438,
            -54.310909
        ],
        "city": "São Gabriel",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzMg=="
    },
    {
        "station_cod": "A829",
        "elevation": 1229,
        "location": [
            -28.748615,
            -50.057869
        ],
        "city": "São José dos Ausentes",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgyOQ=="
    },
    {
        "station_cod": "A852",
        "elevation": 246,
        "location": [
            -28.417113,
            -54.962403
        ],
        "city": "São Luiz Gonzaga",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1Mg=="
    },
    {
        "station_cod": "A889",
        "elevation": 134,
        "location": [
            -29.702111,
            -54.694319
        ],
        "city": "São Vicente do Sul",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg4OQ=="
    },
    {
        "station_cod": "A894",
        "elevation": 545,
        "location": [
            -28.704806,
            -51.870751
        ],
        "city": "Serafina Corrêa",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg5NA=="
    },
    {
        "station_cod": "A837",
        "elevation": 660,
        "location": [
            -28.859211,
            -52.542387
        ],
        "city": "Soledade",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzNw=="
    },
    {
        "station_cod": "A882",
        "elevation": 80,
        "location": [
            -29.450334,
            -51.824283
        ],
        "city": "Teutônia",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg4Mg=="
    },
    {
        "station_cod": "A808",
        "elevation": 8,
        "location": [
            -29.350359,
            -49.733263
        ],
        "city": "Torres",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwOA=="
    },
    {
        "station_cod": "A834",
        "elevation": 5,
        "location": [
            -30.010268,
            -50.135887
        ],
        "city": "Tramandaí",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgzNA=="
    },
    {
        "station_cod": "A886",
        "elevation": 462,
        "location": [
            -29.0893814,
            -53.82665025
        ],
        "city": "Tupanciretã",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg4Ng=="
    },
    {
        "station_cod": "A809",
        "elevation": 74,
        "location": [
            -29.839870,
            -57.081899
        ],
        "city": "Uruguaiana",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwOQ=="
    },
    {
        "station_cod": "A880",
        "elevation": 970,
        "location": [
            -28.513602,
            -50.882738
        ],
        "city": "Vacaria",
        "state": "RS",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg4MA=="
    },
    {
        "station_cod": "A867",
        "elevation": 2,
        "location": [
            -28.931353,
            -49.497920
        ],
        "city": "Araranguá",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2Nw=="
    },
    {
        "station_cod": "A859",
        "elevation": 944,
        "location": [
            -26.819156,
            -50.985520
        ],
        "city": "Caçador",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1OQ=="
    },
    {
        "station_cod": "A898",
        "elevation": 963,
        "location": [
            -27.383861,
            -51.216056
        ],
        "city": "Campos Novos",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg5OA=="
    },
    {
        "station_cod": "A895",
        "elevation": 679,
        "location": [
            -27.085311,
            -52.635711
        ],
        "city": "Chapecó",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg5NQ=="
    },
    {
        "station_cod": "A860",
        "elevation": 978,
        "location": [
            -27.288624,
            -50.604283
        ],
        "city": "Curitibanos",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2MA=="
    },
    {
        "station_cod": "A848",
        "elevation": 808,
        "location": [
            -26.286562,
            -53.633114
        ],
        "city": "Dionísio Cerqueira",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0OA=="
    },
    {
        "station_cod": "A806",
        "elevation": 5,
        "location": [
            -27.602530,
            -48.620096
        ],
        "city": "Florianópolis-São José",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgwNg=="
    },
    {
        "station_cod": "A817",
        "elevation": 72,
        "location": [
            -26.913704,
            -49.267978
        ],
        "city": "Indaial",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxNw=="
    },
    {
        "station_cod": "A868",
        "elevation": 10,
        "location": [
            -26.950924,
            -48.762031
        ],
        "city": "Itajaí",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2OA=="
    },
    {
        "station_cod": "A851",
        "elevation": 6,
        "location": [
            -26.081303,
            -48.641774
        ],
        "city": "Itapoá",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1MQ=="
    },
    {
        "station_cod": "A863",
        "elevation": 480,
        "location": [
            -27.418410,
            -49.646874
        ],
        "city": "Ituporanga",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2Mw=="
    },
    {
        "station_cod": "A841",
        "elevation": 768,
        "location": [
            -27.169268,
            -51.558963
        ],
        "city": "Joaçaba",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0MQ=="
    },
    {
        "station_cod": "A865",
        "elevation": 953,
        "location": [
            -27.802228,
            -50.335457
        ],
        "city": "Lages",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2NQ=="
    },
    {
        "station_cod": "A866",
        "elevation": 34,
        "location": [
            -28.604414,
            -48.813313
        ],
        "city": "Laguna (Farol Santa Marta)",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2Ng=="
    },
    {
        "station_cod": "A864",
        "elevation": 800,
        "location": [
            -26.393664,
            -50.363211
        ],
        "city": "Major Vieira",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2NA=="
    },
    {
        "station_cod": "A845",
        "elevation": 1790,
        "location": [
            -28.126992,
            -49.479610
        ],
        "city": "Morro da Igreja (Bom Jardim da Serra)",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg0NQ=="
    },
    {
        "station_cod": "A816",
        "elevation": 944,
        "location": [
            -26.406499,
            -52.850366
        ],
        "city": "Novo Horizonte",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxNg=="
    },
    {
        "station_cod": "A870",
        "elevation": 881,
        "location": [
            -27.678507,
            -49.042027
        ],
        "city": "Rancho Queimado",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg3MA=="
    },
    {
        "station_cod": "A861",
        "elevation": 592,
        "location": [
            -26.937526,
            -50.145445
        ],
        "city": "Rio do Campo",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2MQ=="
    },
    {
        "station_cod": "A862",
        "elevation": 857,
        "location": [
            -26.248411,
            -49.580624
        ],
        "city": "Rio Negrinho",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg2Mg=="
    },
    {
        "station_cod": "A815",
        "elevation": 1400,
        "location": [
            -28.275640,
            -49.934617
        ],
        "city": "São Joaquim",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxNQ=="
    },
    {
        "station_cod": "A857",
        "elevation": 655,
        "location": [
            -26.776699,
            -53.504541
        ],
        "city": "São Miguel do Oeste",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1Nw=="
    },
    {
        "station_cod": "A814",
        "elevation": 41,
        "location": [
            -28.532557,
            -49.315205
        ],
        "city": "Urussanga",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTgxNA=="
    },
    {
        "station_cod": "A858",
        "elevation": 879,
        "location": [
            -26.938666,
            -52.398090
        ],
        "city": "Xanxerê",
        "state": "SC",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTg1OA=="
    },
    {
        "station_cod": "A409",
        "elevation": 4,
        "location": [
            -10.952413,
            -37.054330
        ],
        "city": "Aracaju",
        "state": "SE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQwOQ=="
    },
    {
        "station_cod": "A421",
        "elevation": 6,
        "location": [
            -10.473959,
            -36.482051
        ],
        "city": "Brejo Grande",
        "state": "SE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyMQ=="
    },
    {
        "station_cod": "A420",
        "elevation": 290,
        "location": [
            -10.399719,
            -37.747503
        ],
        "city": "Carira",
        "state": "SE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQyMA=="
    },
    {
        "station_cod": "A451",
        "elevation": 0,
        "location": [
            -10.671751,
            -37.471501
        ],
        "city": "Itabaiana",
        "state": "SE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ1MQ=="
    },
    {
        "station_cod": "A417",
        "elevation": 205,
        "location": [
            -11.2725,
            -37.795
        ],
        "city": "Itabaianinha",
        "state": "SE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxNw=="
    },
    {
        "station_cod": "A453",
        "elevation": 271,
        "location": [
            -10.207778,
            -37.431889
        ],
        "city": "Nossa Senhora da Glória",
        "state": "SE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQ1Mw=="
    },
    {
        "station_cod": "A419",
        "elevation": 367,
        "location": [
            -10.738020,
            -38.108389
        ],
        "city": "Poço Verde",
        "state": "SE",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTQxOQ=="
    },
    {
        "station_cod": "A736",
        "elevation": 525,
        "location": [
            -21.132937,
            -48.840426
        ],
        "city": "Ariranha",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczNg=="
    },
    {
        "station_cod": "A725",
        "elevation": 776,
        "location": [
            -23.101749,
            -48.940997
        ],
        "city": "Avaré",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyNQ=="
    },
    {
        "station_cod": "A741",
        "elevation": 534,
        "location": [
            -22.471205,
            -48.557573
        ],
        "city": "Barra Bonita",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0MQ=="
    },
    {
        "station_cod": "A746",
        "elevation": 660,
        "location": [
            -24.962819,
            -48.416379
        ],
        "city": "Barra do Turvo",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0Ng=="
    },
    {
        "station_cod": "A748",
        "elevation": 534,
        "location": [
            -20.559175,
            -48.544997
        ],
        "city": "Barretos",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0OA=="
    },
    {
        "station_cod": "A755",
        "elevation": 777,
        "location": [
            -23.52389,
            -46.86945
        ],
        "city": "Baruerí",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1NQ=="
    },
    {
        "station_cod": "A705",
        "elevation": 636,
        "location": [
            -22.358052,
            -49.028877
        ],
        "city": "Bauru",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwNQ=="
    },
    {
        "station_cod": "A764",
        "elevation": 790,
        "location": [
            -20.949197,
            -48.489944
        ],
        "city": "Bebedouro",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2NA=="
    },
    {
        "station_cod": "A765",
        "elevation": 5,
        "location": [
            -23.844678,
            -46.143376
        ],
        "city": "Bertioga",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2NQ=="
    },
    {
        "station_cod": "A744",
        "elevation": 891,
        "location": [
            -22.951972,
            -46.530501
        ],
        "city": "Bragança Paulista",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0NA=="
    },
    {
        "station_cod": "A769",
        "elevation": 586,
        "location": [
            -22.689001,
            -45.005444
        ],
        "city": "Cachoeira Paulista",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2OQ=="
    },
    {
        "station_cod": "A706",
        "elevation": 1663,
        "location": [
            -22.750231,
            -45.603836
        ],
        "city": "Campos do Jordão",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwNg=="
    },
    {
        "station_cod": "A738",
        "elevation": 734,
        "location": [
            -21.78056,
            -47.07528
        ],
        "city": "Casa Branca",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczOA=="
    },
    {
        "station_cod": "A762",
        "elevation": 720,
        "location": [
            -21.457699,
            -51.552254
        ],
        "city": "Dracena",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2Mg=="
    },
    {
        "station_cod": "A708",
        "elevation": 1003,
        "location": [
            -20.584475,
            -47.382549
        ],
        "city": "Franca",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwOA=="
    },
    {
        "station_cod": "A737",
        "elevation": 497,
        "location": [
            -21.855567,
            -48.799717
        ],
        "city": "Ibitinga",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczNw=="
    },
    {
        "station_cod": "A712",
        "elevation": 3,
        "location": [
            -24.671654,
            -47.545896
        ],
        "city": "Iguape",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxMg=="
    },
    {
        "station_cod": "A714",
        "elevation": 743,
        "location": [
            -23.981918,
            -48.885818
        ],
        "city": "Itapeva",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxNA=="
    },
    {
        "station_cod": "A739",
        "elevation": 635,
        "location": [
            -22.415062,
            -46.805292
        ],
        "city": "Itapira",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczOQ=="
    },
    {
        "station_cod": "A753",
        "elevation": 611,
        "location": [
            -20.35976,
            -47.77522
        ],
        "city": "Ituverava",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc1Mw=="
    },
    {
        "station_cod": "A733",
        "elevation": 460,
        "location": [
            -20.165025,
            -50.595134
        ],
        "city": "Jales",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczMw=="
    },
    {
        "station_cod": "A735",
        "elevation": 408,
        "location": [
            -21.085675,
            -49.920388
        ],
        "city": "José Bonifácio",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczNQ=="
    },
    {
        "station_cod": "A727",
        "elevation": 461,
        "location": [
            -21.666045,
            -49.734854
        ],
        "city": "Lins",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyNw=="
    },
    {
        "station_cod": "A763",
        "elevation": 660,
        "location": [
            -22.235222,
            -49.965111
        ],
        "city": "Marília",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2Mw=="
    },
    {
        "station_cod": "A716",
        "elevation": 443,
        "location": [
            -22.949000,
            -49.894546
        ],
        "city": "Ourinhos",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxNg=="
    },
    {
        "station_cod": "A747",
        "elevation": 540,
        "location": [
            -21.338432,
            -48.114007
        ],
        "city": "Pradópolis",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0Nw=="
    },
    {
        "station_cod": "A707",
        "elevation": 432,
        "location": [
            -22.119867,
            -51.408637
        ],
        "city": "Presidente Prudente",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwNw=="
    },
    {
        "station_cod": "A718",
        "elevation": 399,
        "location": [
            -22.372832,
            -50.974710
        ],
        "city": "Rancharia",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxOA=="
    },
    {
        "station_cod": "A766",
        "elevation": 35,
        "location": [
            -24.533139,
            -47.864139
        ],
        "city": "Registro",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2Ng=="
    },
    {
        "station_cod": "A711",
        "elevation": 859,
        "location": [
            -21.980353,
            -47.883927
        ],
        "city": "São Carlos",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxMQ=="
    },
    {
        "station_cod": "A740",
        "elevation": 862,
        "location": [
            -23.228362,
            -45.417055
        ],
        "city": "São Luis do Paraitinga",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc0MA=="
    },
    {
        "station_cod": "A715",
        "elevation": 676,
        "location": [
            -23.852022,
            -48.164817
        ],
        "city": "São Miguel Arcanjo",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxNQ=="
    },
    {
        "station_cod": "A701",
        "elevation": 786,
        "location": [
            -23.496294,
            -46.620088
        ],
        "city": "São Paulo (Mirante de Santana)",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcwMQ=="
    },
    {
        "station_cod": "A771",
        "elevation": 771,
        "location": [
            -23.724451,
            -46.677511
        ],
        "city": "São Paulo-SESC Interlagos",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc3MQ=="
    },
    {
        "station_cod": "A767",
        "elevation": 24,
        "location": [
            -23.810722,
            -45.402528
        ],
        "city": "São Sebastião",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2Nw=="
    },
    {
        "station_cod": "A770",
        "elevation": 620,
        "location": [
            -21.461019,
            -47.579512
        ],
        "city": "São Simão",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc3MA=="
    },
    {
        "station_cod": "A713",
        "elevation": 609,
        "location": [
            -23.426035,
            -47.585552
        ],
        "city": "Sorocaba",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcxMw=="
    },
    {
        "station_cod": "A728",
        "elevation": 582,
        "location": [
            -23.041668,
            -45.520841
        ],
        "city": "Taubaté",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyOA=="
    },
    {
        "station_cod": "A768",
        "elevation": 498,
        "location": [
            -21.927251,
            -50.490251
        ],
        "city": "Tupã",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTc2OA=="
    },
    {
        "station_cod": "A734",
        "elevation": 382,
        "location": [
            -21.319138,
            -50.930158
        ],
        "city": "Valparaiso",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTczNA=="
    },
    {
        "station_cod": "A729",
        "elevation": 510,
        "location": [
            -20.403221,
            -49.966031
        ],
        "city": "Votuporanga",
        "state": "SP",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTcyOQ=="
    },
    {
        "station_cod": "A053",
        "elevation": 503,
        "location": [
            -11.284098,
            -47.212125
        ],
        "city": "Almas",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA1Mw=="
    },
    {
        "station_cod": "A054",
        "elevation": 231,
        "location": [
            -12.592213,
            -49.528738
        ],
        "city": "Araguaçu",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA1NA=="
    },
    {
        "station_cod": "A021",
        "elevation": 231,
        "location": [
            -7.103954,
            -48.201231
        ],
        "city": "Araguaina",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyMQ=="
    },
    {
        "station_cod": "A044",
        "elevation": 131,
        "location": [
            -5.643725,
            -48.111839
        ],
        "city": "Araguatins",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0NA=="
    },
    {
        "station_cod": "A043",
        "elevation": 427,
        "location": [
            -8.154665,
            -46.639323
        ],
        "city": "Campos Lindos",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0Mw=="
    },
    {
        "station_cod": "A049",
        "elevation": 200,
        "location": [
            -8.092708,
            -48.478605
        ],
        "city": "Colinas do Tocantins",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0OQ=="
    },
    {
        "station_cod": "A038",
        "elevation": 728,
        "location": [
            -11.594448,
            -46.847209
        ],
        "city": "Dianópolis",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzOA=="
    },
    {
        "station_cod": "A039",
        "elevation": 215,
        "location": [
            -11.887377,
            -49.608215
        ],
        "city": "Formoso do Araguaia",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAzOQ=="
    },
    {
        "station_cod": "A019",
        "elevation": 279,
        "location": [
            -11.745782,
            -49.049703
        ],
        "city": "Gurupi",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxOQ=="
    },
    {
        "station_cod": "A055",
        "elevation": 178,
        "location": [
            -10.828286,
            -49.847882
        ],
        "city": "Lagoa da Confusão",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA1NQ=="
    },
    {
        "station_cod": "A041",
        "elevation": 187,
        "location": [
            -9.576389,
            -49.72333
        ],
        "city": "Marianópolis do Tocantins",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0MQ=="
    },
    {
        "station_cod": "A040",
        "elevation": 791,
        "location": [
            -10.434441,
            -45.921941
        ],
        "city": "Mateiros",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0MA=="
    },
    {
        "station_cod": "A009",
        "elevation": 292,
        "location": [
            -10.190744,
            -48.301811
        ],
        "city": "Palmas",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAwOQ=="
    },
    {
        "station_cod": "A010",
        "elevation": 285,
        "location": [
            -12.614893,
            -47.871917
        ],
        "city": "Paranã",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxMA=="
    },
    {
        "station_cod": "A020",
        "elevation": 190,
        "location": [
            -8.968677,
            -48.177259
        ],
        "city": "Pedro Afonso",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAyMA=="
    },
    {
        "station_cod": "A018",
        "elevation": 251,
        "location": [
            -12.015377,
            -48.544517
        ],
        "city": "Peixe",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTAxOA=="
    },
    {
        "station_cod": "A051",
        "elevation": 161,
        "location": [
            -10.476944,
            -49.629475
        ],
        "city": "Pium",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA1MQ=="
    },
    {
        "station_cod": "A050",
        "elevation": 291,
        "location": [
            -9.793363,
            -47.132732
        ],
        "city": "Rio Sono",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA1MA=="
    },
    {
        "station_cod": "A048",
        "elevation": 171,
        "location": [
            -7.124191,
            -48.781267
        ],
        "city": "Santa Fé do Araguaia",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA0OA=="
    },
    {
        "station_cod": "A052",
        "elevation": 306,
        "location": [
            -11.429018,
            -48.184889
        ],
        "city": "Santa Rosa do Tocantins",
        "state": "TO",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?QTA1Mg=="
    },
    {
        "station_cod": "U560",
        "elevation": 22,
        "location": [
            -34.4510,
            -57.7675
        ],
        "city": "Colonia",
        "state": "UY",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?VTU2MA=="
    },
    {
        "station_cod": "U460",
        "elevation": 75,
        "location": [
            -32.7989694,
            -56.5290528
        ],
        "city": "Paso de los Toros",
        "state": "UY",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?VTQ2MA=="
    },
    {
        "station_cod": "U565",
        "elevation": 18,
        "location": [
            -34.4936,
            -54.3124
        ],
        "city": "Rocha",
        "state": "UY",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?VTU2NQ=="
    },
    {
        "station_cod": "U360",
        "elevation": 41,
        "location": [
            -31.438889,
            -57.980833
        ],
        "city": "Salto",
        "state": "UY",
        "url": "http://www.inmet.gov.br/sonabra/pg_dspDadosCodigo_sim.php?VTM2MA=="
    }
];

/* seeder.connect(variables.Database.connection, () => {
        seeder.loadModels(["../app/src/models/stationModel"]);
        seeder.clearModels(['Stations'], function () {

            // Callback to populate DB once collections have been cleared
            seeder.populateModels(data, function (err, done) {
                if (err) {
                    return console.log('seeder err: ', err);
                }
                if (done) {
                    return console.log('seeder done: ', done);
                }
                seeder.disconnect();
            });

        });
    }); */

