import { Controller, HttpRequest, HttpResponse } from "../index";
import { IStationGateway } from "@src/data/gateway";
import { UpdateStation } from "@domain/usercase/station";
import { okay, noContent } from "@src/helper/http";
import { Station } from "@domain/entity"
import { HttpRequestToStationFactory } from "@src/main/factory"

export class UpdateStationController implements Controller {

    stationGateway: IStationGateway;

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const updateStation = new UpdateStation(this.stationGateway);

        if (httpRequest.params.id) {
            const station: Station = new HttpRequestToStationFactory(httpRequest).make();
            return updateStation.update(httpRequest.params.id, station).then(station => {
                return okay(station);
            }).catch(error => {
                return noContent();
            });

        } else {
            return noContent();
        }

    }
}