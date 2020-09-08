import { ClimateCapsule } from "@domain/entity";

export interface IClimateGateway {

    getClimePeriod(lat: number, lng: number, startDate: string, endDate: string): Promise<ClimateCapsule>
}