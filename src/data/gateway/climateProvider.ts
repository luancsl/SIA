import { Clime } from "@domain/entity";

export interface IClimateProvider {
    getClime(): Clime
}