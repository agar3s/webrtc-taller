Paso 4
========

Crear un servidor de **Signaling** e intercambiar mensajes.

Las instancias de RTCPeerConnection que necesitan intercambiar metada para poder establecer y mantener una "llamada" WebRTC:

* Información del Candidate (red).
* Oferta(offer) y respuesta(answer) que proveen la información de media como la resolución y los codecs.

El intercambio de metada es requerido antes de que una conexión punto a punto de audio, video o data streaming se realice. Este proceso es llamado **Signaling**.

En el código los objetos RTCPeerConnection "sender" y "receiver" estan en la misma página, el proceso de **signaling** es simplemente una manera de pasar objetos entre metodos.

En una aplicación real, los objetos RTCPeerConnection "sender" y "receiver" no se encuentran en la misma página, y necesitamos una forma de comunicar su metadata.

Para esto, usamos un servidor de signaling: un servidor que intercambia mensajes entre la aplicación WebRTC cliente que corre en el navegador y otro cliente en otro navegador. Los mensajes son objetos javascript convertidos en String.

**Importante**: el intercambio de metadata entre los clientes WebRTC (por medio de un servidor de signaling) es requerido para una conexión del tipo RTCPeerConnection con audio, video y streaming de datos punto a punto.
En este paso tenemos un servidor simple de signaling en Node.js usando socket.io. El servidor es app.js y el cliente o web app es index.html.

El servidor de Node realiza dos tareas:

Actua como intermediario de mensajes:
```javascript
socket.on('message', function (message) {
  log('Got message: ', message);
  socket.broadcast.emit('message', message);
});
```

Para manejar las video salas WebRTC:
```javascript
if (numClients == 0){
  socket.join(room);
  socket.emit('created', room);
} else if (numClients == 1) {
  io.sockets.in(room).emit('join', room);
  socket.join(room);
  socket.emit('joined', room);
} else { // max two clients
  socket.emit('full', room);
}
```

En este ejemplo la aplicación solo permite un máximo de 2 puntos para compartir la sala.

Desde el navegador abra dos pestañas en localhost:3000, para ver lo que sucede abra la consola de Chrome.

### Ejercicio
* Obtenga su ip dentro de la red e intente conectarse a las salas de otros compañeros.
* qué otras alternativas hay de mecanismos de mensajeria?
* qué problemas pueden haber al escalar esta aplicación? puede crear una manera para probar miles o millones de solicitudes de salas simultaneas?
* Cree una forma alternativa de ingresar a una sala, puede ser a partir de la url como: localhost:2013/foo que lo llevaría a la sala foo.