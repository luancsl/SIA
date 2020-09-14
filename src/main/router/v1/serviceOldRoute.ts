import express from 'express';
import bodyParser from "body-parser";
import { GetClimateOldRouteController, GetEtoOldRouteController } from "@src/delivery/controller/service";
import { StationGateway } from "@src/infrastructure/db/mongoose";
import { adaptRoute } from "../../adapter";

const jsonParser = bodyParser.json();

const router = express.Router();

router.get('/eto', jsonParser, adaptRoute(new GetEtoOldRouteController(new StationGateway())));
router.get('/etc', jsonParser, adaptRoute(new GetClimateOldRouteController(new StationGateway())));
router.get('/currentEto', jsonParser, adaptRoute(new GetClimateOldRouteController(new StationGateway())));
router.get('/currentEtc', jsonParser, adaptRoute(new GetClimateOldRouteController(new StationGateway())));

export const serviceOldRoute = router;

/* // rotas com middleware de autorizacao
router.get('/', ctrl.get);
router.get('/eto/', ctrl.getEto);
router.get('/etc/', ctrl.getEtc);
router.get('/currentEto/', ctrl.getCurrentEto);
router.get('/currentEtc/', ctrl.getCurrentEtc);
router.get('/servicesDistance/', ctrl.getServicesDistance);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.post);
router.put('/:id', ctrl.put);
router.delete('/:id', ctrl.delete); */
