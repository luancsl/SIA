import { HttpRequest, HttpResponse } from '@src/delivery/controller/http';
import { GetCultureController } from "./getCultureController";
import { CultureGateway } from "@src/infrastructure/db/mongoose";
import { badRequest } from "@src/helper/http";
import faker from "faker"

const sut = new GetCultureController(new CultureGateway());

describe('Get Culture Controller', () => {
    test('Should return the 203 code without content', async () => {
        const httpRequest: HttpRequest = {
            params: {
                id: '332'
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toEqual(204);
    })

});