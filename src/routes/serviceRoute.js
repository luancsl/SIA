const express = require('express');

const router = express.Router();
const ControllerService = require('../controllers/serviceController');

const ctrl = new ControllerService();

// rotas com middleware de autorizacao
router.get('/',  ctrl.get);
router.get('/eto/', ctrl.getEto);
router.get('/etc/', ctrl.getEtc);
router.get('/servicesDistance/', ctrl.getServicesDistance);
router.get('/:id', ctrl.getById);
router.post('/',  ctrl.post);
router.put('/:id', ctrl.put);
router.delete('/:id',  ctrl.delete);




module.exports = router;
