import { ExpressServer } from './server';
import { cultureRoute, stationRoute, serviceRoute } from "@src/main/router/v1";
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
    console.log('erro: '.concat(error));
}

const server = new ExpressServer(3000);

server.addRoutes('/api/culture', cultureRoute);
server.addRoutes('/api/station', stationRoute);
server.addRoutes('/api/service', serviceRoute);

server.getApp().get('/doc/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(options);
})

server.getApp().use('/public', express.static(path.resolve(__dirname, 'public')))


server.getApp().get(
    '/doc',
    redoc({
        title: 'API Docs SIA',
        specUrl: '/doc/swagger.json',
    })
);

server.start();



