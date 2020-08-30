import { Culture } from "@domain/entity/Culture"

export interface ICultureGateway {
    getAll(): Promise<Culture[]>;
    getById(id: number): Promise<Culture>;
    add(Culture: Culture): Promise<Culture>;
    update(id: number, Culture: Culture): Promise<Culture>;
    removeById(id: number): Promise<Culture>;
    remove(culture: Culture): Promise<Culture>;
}