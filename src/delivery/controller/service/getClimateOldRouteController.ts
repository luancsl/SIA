import { Controller, HttpRequest, HttpResponse } from "../index";
import { IClimateGateway, IStationGateway } from "@src/data/gateway";
import { InmetProvider, NasaPowerProvider, AfrigisProvider, AemetProvider, NoaaProvider } from "@src/infrastructure/service/index";
import { GetClimate, GetStationByDistance } from "@domain/usercase";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";
import { okay, badRequest } from "@src/helper/http";
import { Station } from "@domain/entity";
import { climateToJsonOldRoutePresenter } from "@src/delivery/presenter";

const providers = {
    'inmet': InmetProvider,
    'nasaPower': NasaPowerProvider,
    'afrigis': AfrigisProvider,
    'aemet': AemetProvider,
    'noaa': NoaaProvider
}

export class GetClimateOldRouteController implements Controller {

    stationGateway: IStationGateway

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const { lat, lon: lng, startDate, endDate, service, distance, type } = httpRequest.query;
        let climateProvider: IClimateGateway;
        const latValidation = new RequiredFieldValidation('lat');
        const lngValidation = new RequiredFieldValidation('lng');


        const climateValidations: IValidation[] = [
            latValidation,
            lngValidation,
            new RequiredFieldValidation('startDate'),
            new RequiredFieldValidation('endDate'),
        ];

        const stationValidations: IValidation[] = [
            latValidation,
            lngValidation,
        ];

        const getStationByDistance = new GetStationByDistance(this.stationGateway, new ValidationComposite(stationValidations))

        try {
            const stations: Station[] = await getStationByDistance.getByDistance(parseFloat(lat), parseFloat(lng), parseFloat(distance ?? 10), {});

            if (type === 'satellite') {
                climateProvider = new providers['nasaPower']();
            } else if ((await stations).length > 0) {
                const station = stations[0];
                if (providers[station.entity]) {
                    climateProvider = new providers[station.entity](station);
                } else {
                    climateProvider = new providers['nasaPower']();
                }
            } else {
                climateProvider = new providers['nasaPower']();
            }

        } catch (error) {
            return badRequest(error);
        }

        const getClimate = new GetClimate(climateProvider, new ValidationComposite(climateValidations));

        return getClimate.getClimate(lat, lng, startDate, endDate).then(climateCapsula => {
            return okay(climateToJsonOldRoutePresenter(climateCapsula));
        }).catch(error => {
            return badRequest(error);
        });

    }
}