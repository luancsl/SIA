import { Station } from "@domain/entity";
import { IStationGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class UpdateStation {

    stationGateway: IStationGateway;

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async update(id: number, station: Station): Promise<Station> {
        return this.stationGateway.update(id, station);
    }
}