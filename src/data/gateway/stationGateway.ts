import { Station } from "@domain/entity/Station"

export interface IStationGateway {
    getAll(): Promise<Station[]>;
    getById(id: number): Promise<Station>;
    getByDistance(lat: number, lng: number, distance: number, query: object): Promise<Station[]>;
    add(Culture: Station): Promise<Station>;
    update(id: number, Culture: Station): Promise<Station>;
    removeById(id: number): Promise<Station>;
    remove(culture: Station): Promise<Station>;
}