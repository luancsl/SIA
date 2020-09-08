import { ClimateCapsule, Clime } from "@domain/entity"
import { IClimateGateway, IStationGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"


export class GetClimate {

    private climateGateway: IClimateGateway
    private climateValidation: IValidation

    constructor(climateGateway: IClimateGateway, climateValidation: IValidation) {
        this.climateGateway = climateGateway;
        this.climateValidation = climateValidation;
    }

    async getClimate(lat: number, lng: number, startDate: string, endDate: string): Promise<ClimateCapsule> {
        const error = this.climateValidation.validate({ lat, lng, startDate, endDate });
        if (error) {
            throw error;
        }
        return this.climateGateway.getClimePeriod(lat, lng, startDate, endDate);
    }
}