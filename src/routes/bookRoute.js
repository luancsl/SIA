const express = require('express');
const { requireToken } = require('../middleware/requireToken');

const router = express.Router();
const BookController = require('../controllers/bookController');

const ctrl = new BookController();

router.get('/', requireToken, ctrl.get);
router.get('/:id', requireToken, ctrl.getById);
router.post('/', requireToken, ctrl.post);
router.put('/:id', requireToken, ctrl.put);
router.delete('/:id', requireToken, ctrl.delete);

module.exports = router;
