const express = require('express');
const { requestRegister, requestlogin } = require('../middleware/authUserMiddle');
const { requireToken } = require('../middleware/requireToken');

const router = express.Router();
const ControllerContato = require('../controllers/userController');

const ctrl = new ControllerContato();

// rotas com middewares de login e registro adm
router.post('/register', requestRegister, ctrl.post);

router.post('/login', requestlogin);

// rotas com middleware de autorizacao
router.get('/', requireToken, ctrl.get);
router.get('/book/', requireToken, ctrl.getUserBooks);
router.get('/:id', requireToken, ctrl.getById);
router.post('/', requireToken, ctrl.post);
router.put('/:id', requireToken, ctrl.put);
router.delete('/:id', requireToken, ctrl.delete);


router.get('/:id/usersDistance/', requireToken, ctrl.getUsersDistance);


module.exports = router;
