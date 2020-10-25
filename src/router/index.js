const routes = require('express').Router();
const home = require('../endpoint');
const createComment = require('../endpoint/createComment');


//Assignment's
routes.get('/', home);
routes.post('/sendComment', createComment)


module.exports = routes;
