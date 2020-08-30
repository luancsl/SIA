import { Station } from "@domain/entity";
import { IStationGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class GetStationByDistance {

    stationGateway: IStationGateway;
    stationValidation: IValidation

    constructor(stationGateway: IStationGateway, stationValidation: IValidation) {
        this.stationGateway = stationGateway;
        this.stationValidation = stationValidation;
    }

    async getByDistance(lat: number, lng: number, distance: number, query: object): Promise<Station[]> {
        console.log("param", { lat, lng, distance, ...query })
        const error = this.stationValidation.validate({ lat, lng, distance, ...query });
        if (error) {
            throw error;
        }
        return this.stationGateway.getByDistance(lat, lng, distance, query);
    }
}