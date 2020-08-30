import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "@src/delivery/controller/http";

export const requestExpressAdapter = (request: Request): HttpRequest => {
    const httpRequest: HttpRequest = {
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers,
    }

    return httpRequest;
}

