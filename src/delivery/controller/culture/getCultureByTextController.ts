import { Controller, HttpRequest, HttpResponse } from "../index";
import { ICultureGateway } from "@src/data/gateway";
import { GetCultureByText } from "@domain/usercase/culture";
import { okay, noContent, badRequest } from "@src/helper/http";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";

export class getCultureByTextController implements Controller {

    cultureGateway: ICultureGateway;

    constructor(cultureGateway: ICultureGateway) {
        this.cultureGateway = cultureGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const validations: IValidation[] = [
            new RequiredFieldValidation('text'),
        ];
        const getCulture = new GetCultureByText(this.cultureGateway, new ValidationComposite(validations));

        const { text, ...query } = httpRequest.query;

        return getCulture.getByText(text ?? null, query ?? {}).then(cultures => {
            return okay(cultures);
        }).catch(error => {
            return badRequest(error);
        });

    }
}