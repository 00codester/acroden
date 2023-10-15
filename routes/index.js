const routes = require('express').Router();
// const myController = require('../controllers');

// routes.get('/', myController.awesomeFunction);
// routes.get('/awesome', myController.superAwesomeFunction);

routes.use('/clients', require('./clients'));
routes.use('/inventory', require('./inventory'));
routes.use('/', require('./swagger'));

module.exports = routes;