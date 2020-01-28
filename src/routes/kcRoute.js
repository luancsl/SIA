const express = require('express');

const router = express.Router();
const ControllerKc = require('../controllers/kcController');

const ctrl = new ControllerKc();

// rotas com middleware de autorizacao
router.get('/', ctrl.get);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.post);
router.put('/:id', ctrl.put);
router.delete('/:id', ctrl.delete);

module.exports = router;
