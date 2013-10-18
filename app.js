var connect = require('connect');
var http = require('http');

var app = connect();
var server = http.createServer(app);

app.use(connect.static('./'));
app.use(connect.favicon());
app.use(connect.logger('dev'));

server.listen(3000);
console.log('servidor de pruebas local en http://localhost:3000');
