
const hs = (qg = null, qo, rhmean = null, tmax, tmin, u2 = null, elmsl = null) => {

    const tmed = (tmax + tmin) / 2;
    const result = 0.0023 * 0.408 * (tmed + 17.8) * Math.pow((tmax - tmin), 0.5) * qo;

    return result;
}

module.exports = hs;
