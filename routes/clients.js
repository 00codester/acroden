const express = require('express');
const routes= express.Router();

const controllerFile = require('../controllers');

routes.get('/', controllerFile.getAllClients);
routes.get('/:id', controllerFile.getSingleClient);
routes.post('/', controllerFile.addNewClient);

module.exports = routes;