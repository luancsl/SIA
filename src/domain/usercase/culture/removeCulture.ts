import { Culture } from "@domain/entity";
import { ICultureGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class RemoveCulture {

    cultureGateway: ICultureGateway;

    constructor(cultureGateway: ICultureGateway) {
        this.cultureGateway = cultureGateway;
    }

    async removeById(id: number): Promise<Culture> {
        return this.cultureGateway.removeById(id);
    }

    async remove(culture: Culture): Promise<Culture> {
        return this.cultureGateway.remove(culture);
    }
}