import express from 'express';
import bodyParser from "body-parser";
import { AddStationController, GetStationOldRouteController, GetStationByDistanceOldRouteController, UpdateStationController, RemoveStationController } from "@src/delivery/controller/station";
import { StationGateway } from "@src/infrastructure/db/mongoose";
import { adaptRoute } from "../../adapter";

const jsonParser = bodyParser.json();

const router = express.Router();

router.get('/stationsDistance', jsonParser, adaptRoute(new GetStationByDistanceOldRouteController(new StationGateway())));
router.get('/:id?', jsonParser, adaptRoute(new GetStationOldRouteController(new StationGateway())));
router.post('/', jsonParser, adaptRoute(new AddStationController(new StationGateway())));
router.put('/:id', jsonParser, adaptRoute(new UpdateStationController(new StationGateway())));
router.delete('/:id?', jsonParser, adaptRoute(new RemoveStationController(new StationGateway())));


/* router.get('/', ctrl.get);
router.get('/stationsDistance/', ctrl.getStationsDistance);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.post);
router.put('/:id', ctrl.put);
router.delete('/:id', ctrl.delete); */

export const stationOldRoute = router;
