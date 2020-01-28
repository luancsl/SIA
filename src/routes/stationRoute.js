const express = require('express');

const router = express.Router();
const ControllerStation = require('../controllers/stationController');

const ctrl = new ControllerStation();

// rotas com middleware de autorizacao
router.get('/',  ctrl.get);
router.get('/stationsDistance/', ctrl.getStationsDistance);
router.get('/:id', ctrl.getById);
router.post('/',  ctrl.post);
router.put('/:id', ctrl.put);
router.delete('/:id',  ctrl.delete);




module.exports = router;
