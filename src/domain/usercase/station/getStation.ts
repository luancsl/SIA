import { Station } from "@domain/entity";
import { IStationGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class GetStation {

    stationGateway: IStationGateway;

    constructor(stationGateway: IStationGateway) {
        this.stationGateway = stationGateway;
    }

    async getAll(query: any = {}): Promise<Station[]> {
        return this.stationGateway.getAll(query);
    }

    async getById(id: number): Promise<Station> {
        return this.stationGateway.getById(id);
    }
}