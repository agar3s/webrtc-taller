var static = require('node-static');
var http = require('http');
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(3000);

var io = require('socket.io').listen(app);
console.log('servidor de pruebas local en http://localhost:3000');

io.sockets.on('connection', function (socket){

  // logeando los mensajes en el servidor
  function log(){
    var array = [">>> Mensaje desde el server: "];
    for (var i = 0; i < arguments.length; i++) {
      array.push(arguments[i]);
    }
      socket.emit('log', array);
  }

  socket.on('message', function (message) {
    log('Mensaje recibido:', message);
    // tenga en cuenta que para un ejemplo en produccion deberia usar room en vez de broadcast
    socket.broadcast.emit('message', message);
  });

  socket.on('create or join', function (room) {
    var numClients = io.sockets.clients(room).length;

    log('Sala ' + room + ' tiene ' + numClients + ' cliente(s)');
    log('Solicitud para crear o unirse a la sala: ' + room);

    if (numClients === 0){
      socket.join(room);
      socket.emit('created', room);
    } else if (numClients === 1) {
      io.sockets.in(room).emit('join', room);
      socket.join(room);
      socket.emit('joined', room);
    } else { // max two clients
      socket.emit('full', room);
    }
    socket.emit('emit(): client ' + socket.id + ' joined room ' + room);
    socket.broadcast.emit('broadcast(): client ' + socket.id + ' joined room ' + room);

  });

});