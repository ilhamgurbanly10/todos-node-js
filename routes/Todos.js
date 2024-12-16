const express = require('express');
const router = express.Router();
const TodosController = require('../controllers/TodosController');

router.get('/', TodosController.get);
router.get('/:id', TodosController.getOne);
router.delete('/:id', TodosController.deleteOne);
router.put('/:id', TodosController.updateOne);

module.exports = router;