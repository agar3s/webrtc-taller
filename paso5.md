Paso 5
========

En este paso creamos un cliente de video chat, usando el servidor de signaling que creamos en el paso anterior y la conexión RTCPeerConnection del paso 2.

En este paso usamos adapter.js. Este script es mantenido por Google y abstrae las diferencias entre los navegadores y sus especificaciones.

Desde el navegador abra dos pestañas en localhost:3000, para ver lo que sucede abra la consola de Chrome.

Abra el log desde la Consola de Chrome y la información acerca de WebRTC desde chrome://webrtc-internals.

### Ejercicio

* Esta aplicación solo soporta un video chat uno a uno. Como puede cambiar esto para permitir que mas de una persona pueda compartir su video en la sala de chat? (Revise talky.io para un ejemplo de como funciona.)
* En este ejemplo el nombre de la sala esta hardcodeado. Cual puede ser la mejor forma para habilitar otras salas de chat?
* Funciona en Moviles? Que cambios en UI y en UX habria que realizar para garantizar una mejor experiencia en moviles?
* Comparta su ip con otros compañeros y validen la conexión entre diferentes browsers, discutan sobre las diferentes implementaciones que han realizado.