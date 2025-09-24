const express = require('express');
const controller = require('../controllers/tasks.controller');

const router = express.Router();
router.get('/', controller.findAll);
router.post('/', controller.addTask);
router.delete('/:id', controller.removeTask);
router.get('/:id', controller.findById);
router.put('/:id', controller.updateTitle);
router.patch('/:id/complete', controller.completeTask);
module.exports = router;
