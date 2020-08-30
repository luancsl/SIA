import { Controller, HttpRequest, HttpResponse } from "../index";
import { ICultureGateway } from "@src/data/gateway";
import { GetCulture } from "@domain/usercase/culture";
import { okay, noContent } from "@src/helper/http";

export class GetCultureController implements Controller {

    cultureGateway: ICultureGateway;

    constructor(cultureGateway: ICultureGateway) {
        this.cultureGateway = cultureGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const getCulture = new GetCulture(this.cultureGateway);
        if (httpRequest.params.id) {
            return getCulture.getById(httpRequest.params.id).then(culture => {
                return okay(culture);
            }).catch(error => {
                return noContent();
            });

        } else {
            const culture = await getCulture.getAll();
            return okay(culture);
        }

    }
}