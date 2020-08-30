import { Culture } from "@domain/entity";
import { ICultureGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class GetCulture {

    cultureGateway: ICultureGateway;

    constructor(cultureGateway: ICultureGateway) {
        this.cultureGateway = cultureGateway;
    }

    async getAll(): Promise<Culture[]> {
        return this.cultureGateway.getAll();
    }

    async getById(id: number): Promise<Culture> {
        return this.cultureGateway.getById(id);
    }
}