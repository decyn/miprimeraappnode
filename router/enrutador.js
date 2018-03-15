
var express = require('express');
var router = express.Router();
var constantes = require('./../constantes');

router.get('/', function(request, response){
    response.render('index', {datos: constantes.elMock});
});

router.get('/admin', function(request, response){
    response.sendFile(constantes.appDir + '/public/admin.html');
});

module.exports = router;