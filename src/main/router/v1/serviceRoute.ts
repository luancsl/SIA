import express from 'express';

const router = express.Router();
import ControllerService from '../controllers/serviceController.js';

const ctrl = new ControllerService();

// rotas com middleware de autorizacao
router.get('/', ctrl.get);
router.get('/eto/', ctrl.getEto);
router.get('/etc/', ctrl.getEtc);
router.get('/currentEto/', ctrl.getCurrentEto);
router.get('/currentEtc/', ctrl.getCurrentEtc);
router.get('/servicesDistance/', ctrl.getServicesDistance);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.post);
router.put('/:id', ctrl.put);
router.delete('/:id', ctrl.delete);




export const serviceRoutes = router;
