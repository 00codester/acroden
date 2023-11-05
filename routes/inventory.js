const express = require('express');
const routes= express.Router();

const controllerFile = require('../controllers');
const validation = require('../middleware/validate');

routes.get('/', controllerFile.getAllForSale);
routes.get('/:id', validation.idLengthCheck, controllerFile.getSingleItemForSale);
routes.post('/', validation.saveItem, controllerFile.addNewItemForSale);
routes.put('/:id', validation.saveItem, controllerFile.updateInventoryItem);
routes.delete('/:id',validation.idLengthCheck, controllerFile.deleteInventoryItem);


module.exports = routes;