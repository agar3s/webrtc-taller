Paso 2
=========

RTCPeerConnection es el API de WebRTC para llamadas de audio y video.

Este ejemplo establece una conexión entre 2 puntos en la misma página, esto con el fin de entender como funciona RTCPeerConnection.

Este código hace lo siguiente:

1. obtiene y comparte las descripciones de cada punto: metada acerca de la media local en formato SDP1
2. Obtiene y comparte candidatos ICE2: información de la red.  
3. Pasa el stream local al RTCPeerConnection remoto. 
   
### Ejercicio
* Abra chrome://webrtc-internals antes y despues de realizar la conexión, qué información puede obtener?
* Dale un poco de estilo a los videos.
* Funciona en un celular?
* Desde la consolsa de Chrome inspeccione localStream, localPeerConnection y remotePeerConnection.
* Revise el contenido de localPeerConnection.localDescription. Cómo es el formato SDP?

### links
[http://en.wikipedia.org/wiki/Session_Description_Protocol](http://en.wikipedia.org/wiki/Session_Description_Protocol "SDP: session description protocol")
[http://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment](http://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment "ICE: Interactive Conectivity Establishment")