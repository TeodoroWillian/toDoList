const express = require('express');
const ListController = require('../controllers/toDoListController');
const router = express.Router();

router.get('/', ListController.initialController);
router.get('/allList', ListController.findAllList);
router.get('/listById/:id', ListController.findTarefasById);
router.post('/createList', ListController.createList);
router.put('/updateList/:id', ListController.updateList);
router.delete('/deleteList/:id', ListController.deleteList);

module.exports = router;