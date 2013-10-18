var isInitiator;

room = prompt("Ingresa el nombre de la sala:");

var socket = io.connect();

if (room !== "") {
  console.log('Uniendose a la sala ' + room);
  socket.emit('create or join', room);
}

socket.on('full', function (room){
  console.log('la sala ' + room + ' esta llena.');
});

socket.on('empty', function (room){
  isInitiator = true;
  console.log('La sala ' + room + ' esta vacia.');
});

socket.on('join', function (room){
  console.log('Solicitando unierse a la sala: ' + room);
  console.log('Tu eres el creador de la sala!');
});

socket.on('message', function (msg) {
  console.log('mensaje recibido: ' + msg);
});

socket.on('log', function (array){
  console.log.apply(console, array);
});
