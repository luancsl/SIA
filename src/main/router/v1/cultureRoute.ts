import express from 'express';
import bodyParser from "body-parser";
import { AddCultureController, GetCultureController, UpdateCultureController, RemoveCultureController } from "@src/delivery/controller/culture";
import { CultureGateway } from "@src/infrastructure/db/mongoose";
import { adaptRoute } from "../../adapter";

const jsonParser = bodyParser.json();

const router = express.Router();

router.get('/:id?', jsonParser, adaptRoute(new GetCultureController(new CultureGateway())));
router.post('/', jsonParser, adaptRoute(new AddCultureController(new CultureGateway())));
router.put('/:id', jsonParser, adaptRoute(new UpdateCultureController(new CultureGateway())));
router.delete('/:id?', jsonParser, adaptRoute(new RemoveCultureController(new CultureGateway())));

export const cultureRoute = router;
