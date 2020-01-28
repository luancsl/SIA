const NasaPower = require('./nasaPower_api');
const Inmet = require('./inmet_api');


module.exports = (service) => {
    switch (service) {
        case 'nasa_power':
            return NasaPower;
        case 'satellite':
            return NasaPower;
        case 'inmet':
            return Inmet;
        default:
            return Inmet;
    }
}