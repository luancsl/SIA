import { Station } from "@domain/entity/Station"

export interface IStationGateway {
    getAll(query: any): Promise<Station[]>;
    getById(id: number): Promise<Station>;
    getByDistance(lat: number, lng: number, distance: number, query: object): Promise<Station[]>;
    add(station: Station): Promise<Station>;
    update(id: number, station: Station): Promise<Station>;
    removeById(id: number): Promise<Station>;
    remove(station: Station): Promise<Station>;
}