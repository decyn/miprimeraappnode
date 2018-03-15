var express = require('express');
var ejs = require('ejs');
var morgan = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Definimos express
var app = express();

//Configuración dónde están las vistas
app.set('views', path.join(__dirname, 'views'));
//Configuración del motor de vistas
app.set('view engine', 'ejs');
//Configuración para que el log esté en modo desarrollo
app.use(morgan('dev'));
//Configurar la carpeta public
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

var ruta = require('./router/enrutador');

//Ejecución de la aplicación
app.use('/', ruta);
app.listen(8080);
console.log("App se ha arrancado en el puerto 8080");
