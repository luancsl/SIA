import express from 'express';
import bodyParser from "body-parser";
import { GetClimateController } from "@src/delivery/controller/service";
import { StationGateway } from "@src/infrastructure/db/mongoose";
import { adaptRoute } from "../../adapter";

const jsonParser = bodyParser.json();

const router = express.Router();

router.get('/climate', jsonParser, adaptRoute(new GetClimateController(new StationGateway())));

export const serviceRoute = router;

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
