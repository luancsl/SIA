import { EquationAbstractHandler } from "./equationHandler";
import { Eto } from "@domain/entity";

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

const get_Rn = (albedo, qg, Boltzmann, tmin, tmax, q_ajustado, ea) => {
    const tmp1 = Boltzmann * ((Math.pow(tmax, 4) + Math.pow(tmin, 4)) / 2);
    const tmp2 = 0.35 - 0.14 * Math.pow(ea, 0.5);
    const tmp3 = 1.35 * (qg / q_ajustado) - 0.35;

    const no_lw_rad = tmp1 * tmp2 * tmp3;
    const ni_sw_rad = (1 - albedo) * qg;

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

const penmanMonteith = (qg: number, qo: number, rhmean: number, tmax: number, tmin: number, u2: number, elmsl: number) => {
    console.log("penman-monteith", `${qg}, ${qo}, ${rhmean}, ${tmax}, ${tmin}, ${u2}, ${elmsl}`);
    qg = qg * (Math.pow(10, 6) / 86400);
    qo = qo * (Math.pow(10, 6) / 86400);
    const Tmean = t_mean(tmax, tmin);
    const delta = delta_svp(Tmean);
    const es = get_es_medio(get_es(tmax), get_es(tmin));
    const ea = get_ea(es, rhmean);
    const qajustado = q_ajustado(elmsl, qo);

    let Rn = get_Rn(att.alpha, qg, att.sigma, tmin, Tmean, qajustado, ea);
    Rn = Rn * (86400 / Math.pow(10, 6));

    console.log("penman-monteith", `${delta}, ${Rn}`);
    const result = pet(Rn, Tmean + 273, u2, es, ea, delta, att.y, att.G);

    return result;

}

const valid = (propsRequired: string[], object: object): boolean => {
    
    for (const prop of propsRequired) {
        if (!object[prop]) { return false };
    }
    return true;
}

export class PenmanMonteithHandler extends EquationAbstractHandler {
    name: string = 'Penman-Monteith';
    public handle(required: any): Eto {
        if (valid(['radQg', 'radQo', 'hum', 'tMax', 'tMin', 'windS', 'elevation'], required)) {
            const { radQg, radQo, hum, tMax, tMin, windS, elevation } = required;
            const etoValue: number = penmanMonteith(radQg, radQo, hum, tMax, tMin, windS, elevation);
            const eto: Eto = {
                equation: this.name,
                eto: etoValue,
            }
            return eto;
        }
        return super.handle(required);
    }
}