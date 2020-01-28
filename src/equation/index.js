const PenmanMonteith = require('./penman-monteith');
const HargreavesSamani = require('./hargreaves-samani');


module.exports = (equation) => {
    switch (equation) {
        case 'penman-monteith':
            return [PenmanMonteith, equation];
        case 'hargreaves-samani':
            return [HargreavesSamani, equation];
        default:
            return [PenmanMonteith, 'penman-monteith'];
    }
} 