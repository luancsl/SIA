import { Station } from "@domain/entity";
import { HttpRequest } from "@src/delivery/controller/http"

export class HttpRequestToStationFactory {
    private _httpRequest: HttpRequest;

    constructor(httpRequest: HttpRequest) {
        this._httpRequest = httpRequest;
    }

    make(): Station {
        const body = this._httpRequest.body;
        const Station: Station = {
            stationCod: body.stationCod,
            name: body.name,
            wsiCod: body.wsiCod,
            oscarCod: body.oscarCod,
            status: body.status,
            type: body.type,
            city: body.city,
            state: body.state,
            country: body.country,
            url: body.url,
            entity: body.entity,
            location: {
                type: 'Point',
                coordinates: [body.lng, body.lat],
            },
            elevation: body.elevation,
        }
        return Station;
    }
}