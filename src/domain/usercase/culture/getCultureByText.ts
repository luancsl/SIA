import { Culture } from "@domain/entity";
import { ICultureGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class GetCultureByText {

    cultureGateway: ICultureGateway;
    cultureValidation: IValidation

    constructor(cultureGateway: ICultureGateway, cultureValidation: IValidation) {
        this.cultureGateway = cultureGateway;
        this.cultureValidation = cultureValidation;
    }

    async getByText(text: string, query: object): Promise<Culture[]> {
        console.log("param", { text, ...query })
        const error = this.cultureValidation.validate({ text, ...query });
        if (error) {
            throw error;
        }
        return this.cultureGateway.getByText(text, query);
    }
}