import { EquationAbstractHandler } from "./equationHandler";
import {  Eto } from "@domain/entity/index";

const hargreavesSamani = (qo: number, tmax: number, tmin: number) => {
    console.log("hargreaves-samani", ` ${qo}, ${tmax}, ${tmin}`);
    const tmed = (tmax + tmin) / 2;
    const result = 0.0023 * 0.408 * (tmed + 17.8) * Math.pow((tmax - tmin), 0.5) * qo;

    return result;
}

const valid = (propsRequired: string[], object: object): boolean => {
    for (const prop of propsRequired) {
        if (!object[prop]) { return false };
    }
    return true;
}

export class HargreavesSamaniHandler extends EquationAbstractHandler {
    name: string = 'Hargreaves-Samani';
    public handle(required: any): Eto {
        if (valid(['radQo', 'tMax', 'tMin'], required)) {
            const { radQo, tMax, tMin } = required
            const etoValue: number = hargreavesSamani(radQo, tMax, tMin);
            const eto: Eto = {
                equation: this.name,
                eto: etoValue,
            }
            return eto;
        }
        return super.handle(required);
    }
}


