const routes = require('express').Router();
const home = require('../endpoint');


//Assignment's
routes.get('/', home); 


module.exports = routes;
