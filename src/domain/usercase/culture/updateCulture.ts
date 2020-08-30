import { Culture } from "@domain/entity";
import { ICultureGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class UpdateCulture {

    cultureGateway: ICultureGateway;

    constructor(cultureGateway: ICultureGateway) {
        this.cultureGateway = cultureGateway;
    }

    async update(id: number, culture: Culture): Promise<Culture> {
        return this.cultureGateway.update(id, culture);
    }
}