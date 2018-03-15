var fs = require('fs');
var path = require('path');

var appDir = path.dirname(require.main.filename);

//Mock
var rutaMock = appDir + '/miMock.json';
//Para leer el mock
var mock = JSON.parse(fs.readFileSync(rutaMock));

module.exports = {
    elMock: mock,
    appDir: appDir
};