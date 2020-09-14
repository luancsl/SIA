const att = {
    J: 700,
}

import { EquationAbstractHandler } from "./equationHandler";
import { Eto } from "@domain/entity";

const t_mean = (tmax, tmin) => {
    return (tmax + tmin) / 2.0;
};

const eto = (tmean, elmsl, lat, dewPoint) => {

    const temp0 = tmean + 0.006 * elmsl;
    const temp1 = 100 - lat;
    const temp2 = temp0 / temp1;
    const temp3 = att.J * temp2 + (15 * (tmean - dewPoint));
    const result = temp3 / (80 - tmean);

    return result;
}

const linacre = (qg: number = null, qo: number, rhmean: number = null, tmax: number, tmin: number, u2: number = null, elmsl: number, lat: number, dewPoint: number = 1) => {
    console.log("Linacre", `${qg}, ${qo}, ${rhmean}, ${tmax}, ${tmin}, ${u2}, ${elmsl}, ${lat}, ${dewPoint}`);
    const Tmean = t_mean(tmax, tmin);

    const result = eto(Tmean, elmsl, lat, dewPoint);


    return result;

}

const valid = (propsRequired: string[], object: object): boolean => {

    for (const prop of propsRequired) {
        if (!object[prop]) { return false };
    }
    return true;
}

export class LinacreHandler extends EquationAbstractHandler {
    name: string = 'Linacre';
    public handle(required: any): Eto {
        if (valid(['radQg', 'radQo', 'hum', 'tMax', 'tMin', 'windS', 'elevation', 'lat'], required)) {
            const { radQg, radQo, hum, tMax, tMin, windS, elevation, lat } = required;
            const etoValue: number = linacre(radQg, radQo, hum, tMax, tMin, windS, elevation, lat);
            const eto: Eto = {
                equation: this.name,
                eto: etoValue,
            }
            return eto;
        }
        return super.handle(required);
    }
}