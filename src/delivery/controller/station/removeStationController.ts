import { Controller, HttpRequest, HttpResponse } from "../index";
import { IStationGateway } from "@src/data/gateway";
import { RemoveStation } from "@domain/usercase/station";
import { badRequest, okay, noContent } from "@src/helper/http";
import { Station } from "@domain/entity"
import { HttpRequestToStationFactory } from "@src/main/factory"

export class RemoveStationController implements Controller {

    stationGateway: IStationGateway;

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const removeStation = new RemoveStation(this.stationGateway);

        if (httpRequest.params.id) {
            return removeStation.removeById(httpRequest.params.id).then(station => {
                return okay(station);
            }).catch(error => {
                return noContent();
            });

        } else {
            const station: Station = new HttpRequestToStationFactory(httpRequest).make();
            return removeStation.remove(station).then(station => {
                return okay(station);
            }).catch(error => {
                return noContent();
            });

        }

    }
}