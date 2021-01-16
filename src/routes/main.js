const path = require ('path')
const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/', mainController.index);
router.post('/',mainController.create);
router.delete('/:id/delete',mainController.delete)

router.get('/:id',mainController.edit);
router.put('/:id/edit',mainController.update);


module.exports = router;