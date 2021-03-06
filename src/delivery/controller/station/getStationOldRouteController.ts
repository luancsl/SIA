import { Controller, HttpRequest, HttpResponse } from "../index";
import { IStationGateway } from "@src/data/gateway";
import { GetStation } from "@domain/usercase/station";
import { okay, noContent } from "@src/helper/http";
import { stationToJsonOldRoutePresenter } from '@src/delivery/presenter/station/stationToJsonOldRoutePresenter';

export class GetStationOldRouteController implements Controller {

    stationGateway: IStationGateway;

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const getStation = new GetStation(this.stationGateway);
        if (httpRequest.params.id) {
            return getStation.getById(httpRequest.params.id).then(station => {
                return okay(station);
            }).catch(error => {
                return noContent();
            });

        } else {
            const station = await getStation.getAll(httpRequest.query);
            return okay(station.map(stationToJsonOldRoutePresenter));
        }

    }
}