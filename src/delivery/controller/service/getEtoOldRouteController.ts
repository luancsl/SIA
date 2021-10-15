import { Controller, HttpRequest, HttpResponse } from "../index";
import { IClimateGateway, IStationGateway } from "@src/data/gateway";
import { InmetProvider, NasaPowerProvider, AfrigisProvider, AemetProvider, NoaaProvider } from "@src/infrastructure/service/index";
import { GetClimate, GetStationByDistance } from "@domain/usercase";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";
import { okay, badRequest } from "@src/helper/http";
import { Station, Eto, ClimateCapsule } from "@domain/entity";
import { climateToJsonOldRoutePresenter } from "@src/delivery/presenter";
import { equationsHandler } from "@src/infrastructure/equation";
import { getEtoBestEquation } from "@src/main/factory";

const providers = {
    'inmet': InmetProvider,
    'nasaPower': NasaPowerProvider,
    'afrigis': AfrigisProvider,
    'aemet': AemetProvider,
    'noaa': NoaaProvider
}

export class GetEtoOldRouteController implements Controller {

    stationGateway: IStationGateway

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const { startDate, endDate, service, distance, type, equation } = httpRequest.query;

        const lat = httpRequest.query.lat ? parseFloat(httpRequest.query.lat) : null;
        const lng = httpRequest.query.lon ? parseFloat(httpRequest.query.lon) : null;

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
            const stations: Station[] = await getStationByDistance.getByDistance(lat, lng, parseFloat(distance ?? 10), {});

            if (type === 'satellite') {
                climateProvider = new providers['nasaPower']();
            } else if ((await stations).length > 0) {
                const station = stations[0];
                if (providers[station.entity]) {
                    const key = stations.length > 1 ? stations[1].entity : station.entity;
                    if (station.entity !== key) {
                        climateProvider = new providers[stations[1].entity](stations[1]);
                    } else {
                        climateProvider = new providers[station.entity](station);
                    }
                } else {
                    climateProvider = new providers['nasaPower']();
                }
            } else {
                climateProvider = new providers['nasaPower']();
            }

        } catch (error) {
            console.log(error);
            return badRequest(error);
        }

        const getClimate = new GetClimate(climateProvider, new ValidationComposite(climateValidations));

        const bundle = (climateCapsula: ClimateCapsule) => {
            climateCapsula.climates = climateCapsula.climates.map(clime => {
                type ClimeComposedEto = typeof clime & Eto;
                let eto: Eto;
                if (equation in equationsHandler) {
                    const getEtoChooseEquation = new equationsHandler[equation]();
                    eto = getEtoChooseEquation.handle({ ...clime, lat: climateCapsula.lat, elevation: climateCapsula.elevation });
                } else {
                    eto = getEtoBestEquation.handle({ ...clime, lat: climateCapsula.lat, elevation: climateCapsula.elevation });
                }
                console.log('PURE2 >>>', eto);
                const data: ClimeComposedEto = {
                    ...clime,
                    equation: eto.equation,
                    eto: eto.eto
                }
                return data;
            });
            return climateCapsula
        }

        return getClimate.getClimate(lat, lng, startDate, endDate).then(climateCapsula => {
            if (climateCapsula.climates.length > 0) {
                return okay(climateToJsonOldRoutePresenter(bundle(climateCapsula)));
            } else {
                getClimate.setClimateGateway(new providers['nasaPower']());
                return getClimate.getClimate(lat, lng, startDate, endDate).then(climateCapsula => {
                    return okay(climateToJsonOldRoutePresenter(bundle(climateCapsula)));
                }).catch(error => {
                    return badRequest(error);
                });
            }
        }).catch(error => {
            console.log(error)
            return badRequest(error);
        });
    }
}