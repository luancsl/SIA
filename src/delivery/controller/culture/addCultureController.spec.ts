import { HttpRequest, HttpResponse } from '@src/delivery/controller/http';
import { AddCultureController } from "./addCultureController";
import { CultureGateway } from "@src/infrastructure/db/mongoose";
import { badRequest } from "@src/helper/http";
import faker from "faker"

const sut = new AddCultureController(new CultureGateway());

describe('Add Culture Controller', () => {
    test('Should return code 400 for missing required parameters', async () => {
        const httpRequest: HttpRequest = {
            body: {
                class: faker.random.word
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toEqual(400);
    })

    test('should not return the code 400 for the required parameters present', async () => {
        const httpRequest: HttpRequest = {
            body: {
                culture: faker.random.word,
                ini: faker.random.number,
                mid: faker.random.number,
                end: faker.random.number
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toEqual(400);
    })
});