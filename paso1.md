Paso 1
=========

En este primer paso vamos a obtener acceso a la cámara haciendo uso de getUserMedia().

## Preparación ##

Primero debes instalar connect para poder servir los archivos estáticos, para esto:
```
npm install
```
ejecuta y accede a tu servidor local en http://localhost:3000
```
node app.js
```

index.js es la página que contiene el código para acceder a la cámara:
getUserMedia se usa de la siguiente manera:
```
navigator.getUserMedia(constraints, successCallback, errorCallback);
```
constraints especifica el tipo de media a obtener, para este ejemplo solo video.
```
var constraints = {"video": true}
```
Si es exitoso, el stream de video de la webcam es asignado como la fuente del elemento <video>
```
function successCallback(localMediaStream) {
  window.stream = localMediaStream; // stream available to console
  var video = document.querySelector("video");
  video.src = window.URL.createObjectURL(localMediaStream);
  video.autoplay = true;
}
```

Ejercicio:

* inspeccionar el objeto *stream* en la consola
* intentar llamar el metodo *stream.stop()*
* qué retorna *stream.getVideoTracks()*?
* para el objeto *constraints*: agrega *audio: true* y observe que sucede.
* Cúal es el tamaño del elemento <video>? 
* agrega unos filtros CSS al elemento <video>, por ejemplo:
```
video {
  filter: hue-rotate(180deg) saturate(200%);
  -moz-filter: hue-rotate(180deg) saturate(200%);
  -webkit-filter: hue-rotate(180deg) saturate(200%);
}
```