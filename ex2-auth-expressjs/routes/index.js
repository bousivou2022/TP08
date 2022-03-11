const { application } = require('express');
var express = require('express');
const { login } = require('../services/login');
const { register } = require('../services/register');
var router = express.Router();

router.get('/login', function (request, response) {
    console.log(request.body);
    
    const { email, password } = request.body
    const result = login(email, password)
    response.json(result)
});

router.post('/register', function (request, response) {
    const result = register(request.body)
    respo.json(result)
});

module.exports = router;