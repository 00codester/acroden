const express = require('express');
const routes= express.Router();

const controllerFile = require('../controllers');

routes.get('/', controllerFile.getAll);

module.exports = routes;