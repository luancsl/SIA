const att = {
  alpha: 0.2,
  sigma: 5.67 * Math.pow(10, -8),
  G: 0.8,
  y: 0.063
};

const t_mean = (tmax, tmin) => {
  return (tmax + tmin) / 2.0;
};

const get_es = t => {
  return 0.6108 * Math.exp((17.27 * t) / (t + 237.3));
};

const get_es_medio = (es_tmax, es_tmin) => {
  return (es_tmax + es_tmin) / 2.0;
};

const q_ajustado = (altitude, q0) => {
  return (0.00002 * altitude + 0.75) * q0;
};

const get_ea = (es_medio, rh_mean) => {
  return (rh_mean / 100.0) * es_medio;
};

const get_Rn = (albedo, Qg, Boltzmann, tmin, tmax, q_ajustado, ea) => {
  const tmp1 = Boltzmann * ((Math.pow(tmax, 4) + Math.pow(tmin, 4)) / 2);
  const tmp2 = 0.35 - 0.14 * Math.pow(ea, 0.5);
  const tmp3 = 1.35 * (Qg / q_ajustado) - 0.35;

  const no_lw_rad = tmp1 * tmp2 * tmp3;
  const ni_sw_rad = (1 - albedo) * Qg;

  return ni_sw_rad - no_lw_rad;
};

const delta_svp = t => {
  const tmp = 4098 * (0.6108 * Math.exp((17.27 * t) / (t + 237.3)));
  return tmp / Math.pow(t + 237.3, 2);
};

const pet = (Rn, t, u2, es, ea, delta_svp, y, G) => {
  const a1 = (0.408 * (Rn - G) * delta_svp) / (delta_svp + y * (1 + 0.34 * u2));
  const a2 = (((900 * u2) / t) * (es - ea) * y) / (delta_svp + y * (1 + 0.34 * u2));
  return a1 + a2;
};

const pm = (Qg, Q0, RHmean, Tmax, Tmin, U2, ELmsl) => {
  Qg = Qg * (Math.pow(10, 6) / 86400);
  Q0 = Q0 * (Math.pow(10, 6) / 86400);
  const Tmean = t_mean(Tmax, Tmin);
  const delta = delta_svp(Tmean);
  const es = get_es_medio(get_es(Tmax), get_es(Tmin));
  const ea = get_ea(es, RHmean);
  const qajustado = q_ajustado(ELmsl, Q0);
  let Rn = get_Rn(att.alpha, Qg, att.sigma, Tmin, Tmean, qajustado, ea);
  Rn = Rn * (86400 / Math.pow(10, 6));
  const result = pet(Rn, Tmean + 273, U2, es, ea, delta, att.y, att.G);
  console.log("result:", result);
  return result;

}


module.exports = pm;
