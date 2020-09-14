import { EquationAbstractHandler } from "./equationHandler";
import { Eto } from "@domain/entity";

const t_mean = (tmax, tmin) => {
    return (tmax + tmin) / 2.0;
};

const adjustment_factor = (tmean) => {
    if (tmean <= 23.5) {
        return 0.01;
    } else if ((tmean >= 23.6) && (tmean <= 24.5)) {
        return 0.0105;
    } else if ((tmean >= 24.6) && (tmean <= 25.5)) {
        return 0.011;
    } else if ((tmean >= 25.6) && (tmean <= 26.5)) {
        return 0.0115;
    } else if ((tmean >= 26.6) && (tmean <= 27.5)) {
        return 0.012;
    } else {
        return 0.013;
    }
}

const camargo71 = (qg: number = null, qo: number, rhmean: number = null, tmax: number, tmin: number, u2: number = null, period: number = 1) => {

    console.log("Camargo", `${qg}, ${qo}, ${rhmean}, ${tmax}, ${tmin}, ${u2}, ${period}`);

    const Tmean = t_mean(tmax, tmin);
    const K = adjustment_factor(Tmean);
    const D = period;

    const result = qo * Tmean * K * D;

    return result;

}

const valid = (propsRequired: string[], object: object): boolean => {
    
    for (const prop of propsRequired) {
        if (!object[prop]) { return false };
    }
    return true;
}

export class Camargo71Handler extends EquationAbstractHandler {
    name: string = 'Camargo-71';
    public handle(required: any): Eto {
        if (valid(['radQg', 'radQo', 'hum', 'tMax', 'tMin', 'windS', 'elevation'], required)) {
            const { radQg, radQo, hum, tMax, tMin, windS, elevation } = required;
            const etoValue: number = camargo71(radQg, radQo, hum, tMax, tMin, windS, elevation);
            const eto: Eto = {
                equation: this.name,
                eto: etoValue,
            }
            return eto;
        }
        return super.handle(required);
    }
}