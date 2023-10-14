const routes = require('express').Router();
// const myController = require('../controllers');

// routes.get('/', myController.awesomeFunction);
// routes.get('/awesome', myController.superAwesomeFunction);

routes.use('/clients', require('./clients'));

module.exports = routes;