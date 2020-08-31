import { Clime, Station } from "./index";

export type ClimateCapsule = {
    startDate: string,
    endDate: string,
    service: string,
    station?: Station,
    lat: number,
    lng: number,
    elevation: number,
    climates: Clime[]
}