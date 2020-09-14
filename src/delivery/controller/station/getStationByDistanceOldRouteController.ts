import { Controller, HttpRequest, HttpResponse } from "../index";
import { IStationGateway } from "@src/data/gateway";
import { GetStationByDistance } from "@domain/usercase/station";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";
import { okay, badRequest } from "@src/helper/http";
import { stationToJsonOldRoutePresenter } from '@src/delivery/presenter/station/stationToJsonOldRoutePresenter';

export class GetStationByDistanceOldRouteController implements Controller {

    stationGateway: IStationGateway;

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const validations: IValidation[] = [
            new RequiredFieldValidation('lat'),
            new RequiredFieldValidation('lng'),
        ];
        const getStation = new GetStationByDistance(this.stationGateway, new ValidationComposite(validations));

        const { lat, lon: lng, distance, ...query } = httpRequest.query;

        return getStation.getByDistance(parseFloat(lat), parseFloat(lng), parseFloat(distance ?? 10), query ?? {}).then(stations => {
            return okay(stations.map(stationToJsonOldRoutePresenter));
        }).catch(error => {
            return badRequest(error);
        });

    }
}