const routes = require('express').Router();
const { auth } = require('express-openid-connect');
// const myController = require('../controllers');

// routes.get('/', myController.awesomeFunction);
// routes.get('/awesome', myController.superAwesomeFunction);
// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.SESSION_SECRET,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.AUTH0_CLIENT_ID,
//     issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
// };


routes.use('/clients', require('./clients'));
routes.use('/inventory', require('./inventory'));
routes.use('/', require('./swagger'));


  
  // auth router attaches /login, /logout, and /callback routes to the baseURL
//routes.use(auth(config));
  
  // req.isAuthenticated is provided from the auth router
routes.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

module.exports = routes;