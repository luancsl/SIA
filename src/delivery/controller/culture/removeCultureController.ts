import { Controller, HttpRequest, HttpResponse } from "../index";
import { ICultureGateway } from "@src/data/gateway";
import { RemoveCulture } from "@domain/usercase/culture";
import { badRequest, okay, noContent } from "@src/helper/http";
import { Culture } from "@domain/entity"
import { HttpRequestToCultureFactory } from "@src/main/factory"

export class RemoveCultureController implements Controller {

    cultureGateway: ICultureGateway;

    constructor(cultureGateway: ICultureGateway) {
        this.cultureGateway = cultureGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const removeCulture = new RemoveCulture(this.cultureGateway);

        if (httpRequest.params.id) {
            return removeCulture.removeById(httpRequest.params.id).then(culture => {
                return okay(culture);
            }).catch(error => {
                return noContent();
            });

        } else {
            const culture: Culture = new HttpRequestToCultureFactory(httpRequest).make();
            return removeCulture.remove(culture).then(culture => {
                return okay(culture);
            }).catch(error => {
                return noContent();
            });

        }

    }
}