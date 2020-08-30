import { Station } from "@domain/entity";
import { IStationGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class RemoveStation {

    stationGateway: IStationGateway;

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async removeById(id: number): Promise<Station> {
        return this.stationGateway.removeById(id);
    }

    async remove(station: Station): Promise<Station> {
        return this.stationGateway.remove(station);
    }
}