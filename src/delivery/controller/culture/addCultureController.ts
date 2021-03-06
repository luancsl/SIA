import { Controller, HttpRequest, HttpResponse } from "../index";
import { ICultureGateway } from "@src/data/gateway";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";
import { AddCulture } from "@domain/usercase/culture";
import { Culture } from "@domain/entity"
import { HttpRequestToCultureFactory } from "@src/main/factory"
import { badRequest, okay } from "@src/helper/http";

export class AddCultureController implements Controller {

    cultureGateway: ICultureGateway;

    constructor(cultureGateway: ICultureGateway) {
        this.cultureGateway = cultureGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const culture: Culture = new HttpRequestToCultureFactory(httpRequest).make();

        const validations: IValidation[] = [
            new RequiredFieldValidation('name.enUS'),
            new RequiredFieldValidation('name.ptBR'),
            new RequiredFieldValidation('class.ptBR'),
            new RequiredFieldValidation('iniStagekc'),
            new RequiredFieldValidation('midStagekc'),
            new RequiredFieldValidation('endStagekc'),
            new RequiredFieldValidation('icon'),
            new RequiredFieldValidation('source'),
        ];

        const addCulture = new AddCulture(this.cultureGateway, new ValidationComposite(validations));

        return addCulture.add(culture).then(result => {
            return okay(culture);
        }).catch(error => {
            return badRequest(error);
        });


    }
}