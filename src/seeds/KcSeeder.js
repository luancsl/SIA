require('../models/kcModel');
const variables = require('../../bin/configuration/variables');
const mongoose = require('mongoose');

try {
    mongoose.connect(variables.Database.connection, {
        useNewUrlParser: true,
    });
} catch (error) {
    console.log('erro: '.concat(error));
}

const stationModel = mongoose.model('Kc');

const KcSeeder = () => {

    const result = stationModel.insertMany(data).then(resposta => { });

    return result
}

module.exports = KcSeeder;


const data = [
    {
        "culture": "Alho",
        "type": "",
        "class": "Legumes pequenos",
        "ini": 0.7,
        "mid": 1.00,
        "end": 0.70,
        "max_crop_height": 0.3,
        "image_link": "https://dictionary.cambridge.org/pt/images/thumb/garlic_noun_002_15463.jpg?version=5.0.73",
        "region": ""
    },
    {
        "culture": "Espinafre",
        "type": "",
        "class": "Legumes pequenos",
        "ini": 0.7,
        "mid": 1.00,
        "end": 0.95,
        "max_crop_height": 0.3,
        "image_link": "https://cdn.mos.cms.futurecdn.net/atyrpYQoxdoTzmEgu8HMWE-320-80.jpg",
        "region": ""
    },
    {
        "culture": "Alface",
        "type": "",
        "class": "Legumes pequenos",
        "ini": 0.7,
        "mid": 1.00,
        "end": 0.95,
        "max_crop_height": 0.3,
        "image_link": "https://image.shutterstock.com/image-photo/salad-leaf-lettuce-isolated-on-260nw-519072682.jpg",
        "region": ""
    },
    {
        "culture": "Feijão verde",
        "type": "",
        "class": "Leguminosas",
        "ini": 0.5,
        "mid": 1.05,
        "end": 0.90,
        "max_crop_height": 0.4,
        "image_link": "https://i5.walmartimages.ca/images/Large/-40/662/999999-40662.jpg",
        "region": ""
    },
    {
        "culture": "Feijão seco",
        "type": "",
        "class": "Leguminosas",
        "ini": 0.4,
        "mid": 1.15,
        "end": 0.35,
        "max_crop_height": 0.4,
        "image_link": "https://www.adaptiveseeds.com/wp-content/uploads/2016/01/bean_beers1.jpg",
        "region": ""
    },
    {
        "culture": "Melancia",
        "type": "",
        "class": "Legumes - família de pepino (Cucurbitaceae)",
        "ini": 0.4,
        "mid": 1.00,
        "end": 0.75,
        "max_crop_height": 0.4,
        "image_link": "https://i5.walmartimages.ca/images/Large/125/978/6000200125978.jpg",
        "region": ""
    },
    {
        "culture": "Melões doces",
        "type": "",
        "class": "Legumes - família de pepino (Cucurbitaceae)",
        "ini": 0.5,
        "mid": 1.05,
        "end": 0.75,
        "max_crop_height": 0.4,
        "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1S4MO2-VeO2HAbDt6YNeaQMHPopjWmeRnrRFqSFcl7j_lclCa",
        "region": ""
    },
    {
        "culture": "Mandioca",
        "type": "1 ano",
        "class": "Raízes e tubérculos",
        "ini": 0.3,
        "mid": 0.80,
        "end": 0.3,
        "max_crop_height": 1.0,
        "image_link": "https://cdn.britannica.com/68/140368-050-C1B8D613/tubers.jpg",
        "region": ""
    },
    {
        "culture": "Mandioca",
        "type": "2 ano",
        "class": "Raízes e tubérculos",
        "ini": 0.3,
        "mid": 1.10,
        "end": 0.50,
        "max_crop_height": 1.5,
        "image_link": "https://cdn.britannica.com/68/140368-050-C1B8D613/tubers.jpg",
        "region": ""
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

