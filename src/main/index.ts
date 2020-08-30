import { ExpressServer } from './server';
import { cultureRoute, stationRoute } from "@src/main/router/v1";
import mongoose from "mongoose";
import config from "@src/main/config";
import { options } from "@src/main/doc";
import redoc from "redoc-express"
import express from 'express';
import path from "path";

try {
    mongoose.connect(config.DATABASE_ADDR, {
        useNewUrlParser: true,
    });
} catch (error) {
    // eslint-disable-next-line no-console
    console.log('erro: '.concat(error));
}

const server = new ExpressServer(3000);

server.addRoutes('/culture', cultureRoute);
server.addRoutes('/station', stationRoute);

server.getApp().get('/docs/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(options);
})

server.getApp().use('/public', express.static(path.resolve(__dirname, 'public')))


server.getApp().get(
    '/docs',
    redoc({
        title: 'API Docs SIA',
        specUrl: '/docs/swagger.json',
    })
);

server.start();



