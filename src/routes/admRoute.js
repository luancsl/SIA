const express = require('express');
const { requestRegister, requestlogin } = require('../middleware/authAdmMiddle');
const { requireToken } = require('../middleware/requireToken');

const router = express.Router();
const AdmController = require('../controllers/admController');

const ctrl = new AdmController();

// rotas com middewares de login e registro adm
router.post('/register', requestRegister, ctrl.post);

router.post('/login', requestlogin);

// rotas com middleware de autorizacao
router.get('/', requireToken, ctrl.get);
router.get('/:id', requireToken, ctrl.getById);
router.post('/', requireToken, ctrl.post);
router.put('/:id', requireToken, ctrl.put);
router.delete('/:id', requireToken, ctrl.delete);

module.exports = router;
