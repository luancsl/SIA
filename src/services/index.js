const NasaPower = require('./nasaPower_api');
const Inmet = require('./inmet_api');
const CurrentNasaPower = require('./c_nasaPower_api');
const CurrentInmet = require('./c_inmet_api');


module.exports = (service, current = false) => {
    switch (service) {
        case 'nasa_power':
            if (current) {
                return CurrentNasaPower;
            } else {
                return NasaPower;
            }
        case 'satellite':
            if (current) {
                return CurrentNasaPower;
            } else {
                return NasaPower;
            }
        case 'inmet':
            if (current) {
                return CurrentInmet;
            } else {
                return Inmet;
            }
        default:
            if (current) {
                return CurrentInmet;
            } else {
                return Inmet;
            }
    }
}