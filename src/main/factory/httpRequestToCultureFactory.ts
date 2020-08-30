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
            class: body.class,
            culture: body.culture,
            type: body.type,
            region: body.region,
            ini: body.ini,
            mid: body.mid,
            end: body.end,
            maxCropHeight: body.max_crop_height,
            imageLink: body.imageLink,
        }
        return Culture;
    }
}