const express = require('express');
const routes= express.Router();

const controllerFile = require('../controllers');

routes.get('/', controllerFile.getAllForSale);
routes.get('/:id', controllerFile.getSingleItemForSale);
//routes.post('/', controllerFile.addNewClient);

module.exports = routes;