import { Controller, HttpRequest, HttpResponse } from "../index";
import { ICultureGateway } from "@src/data/gateway";
import { UpdateCulture } from "@domain/usercase/culture";
import { okay, noContent } from "@src/helper/http";
import { Culture } from "@domain/entity"
import { HttpRequestToCultureFactory } from "@src/main/factory"

export class UpdateCultureController implements Controller {

    cultureGateway: ICultureGateway;

    constructor(cultureGateway: ICultureGateway) {
        this.cultureGateway = cultureGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const updateCulture = new UpdateCulture(this.cultureGateway);

        if (httpRequest.params.id) {
            const culture: Culture = new HttpRequestToCultureFactory(httpRequest).make();
            return updateCulture.update(httpRequest.params.id, culture).then(culture => {
                return okay(culture);
            }).catch(error => {
                return noContent();
            });

        } else {
            return noContent();
        }

    }
}