const express = require('express');
const routes= express.Router();

const controllerFile = require('../controllers');
const validation = require('../middleware/validate');
//const validation = require('../validation/validation');

routes.get('/', controllerFile.getAllClients);
routes.get('/:id',validation.idLengthCheck, controllerFile.getSingleClient);
//routes.post('/', controllerFile.addNewClient);
//routes.put('/:id', controllerFile.updateClient);
routes.post('/', validation.saveClient, controllerFile.addNewClient);
routes.put('/:id', validation.saveClient, controllerFile.updateClient);
//routes.post('/',validation.signupValidation, controllerFile.addNewClient);
//routes.put('/:id',validation.signupValidation, controllerFile.updateClient);
routes.delete('/:id',validation.idLengthCheck, controllerFile.deleteClient);

module.exports = routes;