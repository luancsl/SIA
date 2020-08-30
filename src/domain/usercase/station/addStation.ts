import { Station } from "@domain/entity";
import { IStationGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class AddStation {

    stationGateway: IStationGateway;
    stationValidation: IValidation

    constructor(stationGateway: IStationGateway, stationValidation: IValidation) {
        this.stationGateway = stationGateway;
        this.stationValidation = stationValidation;
    }

    async add(station: Station): Promise<Station> {
        const error = this.stationValidation.validate(station);
        if(error){
            throw error;
        }
        return this.stationGateway.add(station);
    }
}