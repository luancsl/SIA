import { Culture } from "@domain/entity";
import { ICultureGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class AddCulture {

    cultureGateway: ICultureGateway;
    cultureValidation: IValidation

    constructor(cultureGateway: ICultureGateway, cultureValidation: IValidation) {
        this.cultureGateway = cultureGateway;
        this.cultureValidation = cultureValidation;
    }

    async add(culture: Culture): Promise<Culture> {
        const error = this.cultureValidation.validate(culture);
        if(error){
            throw error;
        }
        return this.cultureGateway.add(culture);
    }
}