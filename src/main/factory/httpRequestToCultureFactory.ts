import { Culture } from "@domain/entity";
import { HttpRequest } from "@src/delivery/controller/http"

export class HttpRequestToCultureFactory {
    private _httpRequest: HttpRequest;

    constructor(httpRequest: HttpRequest) {
        this._httpRequest = httpRequest;
    }

    make(): Culture {
        const body = this._httpRequest.body;
        const Culture: Culture = {
            ...body
        }
        return Culture;
    }
}