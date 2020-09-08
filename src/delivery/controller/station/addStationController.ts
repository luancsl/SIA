import { Controller, HttpRequest, HttpResponse } from "../index";
import { IStationGateway } from "@src/data/gateway";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";
import { AddStation } from "@domain/usercase/station";
import { Station } from "@domain/entity"
import { HttpRequestToStationFactory } from "@src/main/factory"
import { badRequest, okay } from "@src/helper/http";

export class AddStationController implements Controller {

    stationGateway: IStationGateway;

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const station: Station = new HttpRequestToStationFactory(httpRequest).make();

        const validations: IValidation[] = [
            new RequiredFieldValidation('stationCod'),
            new RequiredFieldValidation('lat'),
            new RequiredFieldValidation('lng'),
            new RequiredFieldValidation('entity'),
            new RequiredFieldValidation('country'),
            new RequiredFieldValidation('status'),
            new RequiredFieldValidation('type'),
        ];

        const addStation = new AddStation(this.stationGateway, new ValidationComposite(validations));

        return addStation.add(station).then(result => {
            return okay(station);
        }).catch(error => {
            return badRequest(error);
        });


    }
}