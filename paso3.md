Paso 3
=========

En este paso, se usará RTCDataChannel para enviar texto entre dos cajas de texto de la misma página, con la intención nuevamente de demostrar como funciona el API de RTCDataChannel.

Este código usa RTCPeerConnection y RTCDataChannel para permitir el intercambio de mensajes de texto.

El código adicional que se uso en este ejemplo:

```javascript
function sendData(){
  var data = document.getElementById("dataChannelSend").value;
  sendChannel.send(data);
}
...
localPeerConnection = new webkitRTCPeerConnection(servers,
  {optional: [{RtpDataChannels: true}]});
sendChannel = localPeerConnection.createDataChannel("sendDataChannel",
  {reliable: false});
sendChannel.onopen = handleSendChannelStateChange;
sendChannel.onclose = handleSendChannelStateChange;
...
remotePeerConnection = new webkitRTCPeerConnection(servers,
  {optional: [{RtpDataChannels: true}]});
function gotReceiveChannel(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = gotMessage;
}
...
remotePeerConnection.ondatachannel = gotReceiveChannel;
function gotMessage(event) {
  document.getElementById("dataChannelReceive").value = event.data;
}
```

La sintáxis de **RTCDataChannel** es similar a WebSocket, con el metodo **send()** para enviar mensajes y el evento **onmessage** para capturarlos.

### Ejercicio

* Pruebe RTCDataChannel para compartir archivos con [Sharefest](https://www.sharefest.me/ "ShareFest"). 
* Pruebe la página en un celular.
* Intente enviar json data usando la consola.