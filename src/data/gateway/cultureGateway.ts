import { Culture } from "@domain/entity/Culture"

export interface ICultureGateway {
    getAll(): Promise<Culture[]>;
    getById(id: number): Promise<Culture>;
    add(culture: Culture): Promise<Culture>;
    update(id: number, culture: Culture): Promise<Culture>;
    removeById(id: number): Promise<Culture>;
    remove(culture: Culture): Promise<Culture>;
}