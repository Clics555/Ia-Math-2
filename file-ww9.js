// Función que analiza la imagen del problema
function analizarImagen() {
 // Código para analizar la imagen del problema 
 console.log("Analizando imagen...");
 // Obtenemos la imagen seleccionada por el usuario 
 let imagen = document.getElementById("imagen-problema").files[0];
 // Enviamos la imagen al servidor para su análisis 
 fetch("/analizar-imagen", {
 method:"POST",
 body:new FormData(document.getElementById("formulario-imagen")),
 headers:{'Content-Type': 'multipart/form-data'}
 })
 .then(respuesta => respuesta.json())
 .then(data => {

//Mostramos los pasos de solución 

document.getElementById("pasos-solucion").innerHTML = data.pasos.join("<br>");

// Mostramos resultado 


document.getElementById("resultado-solucion").innerHTML = "Resultado:<br>" + data.resultado ;

})
.catch(error => console.error(error));




}


// Función que resuelve el problema mediante texto 
function resolverProblema() {

console.log ("resolviendo texto ...")

let textoProblema = document.getElementById ("texto-problema").value ;

fetch ("/resolver-texto",{

method:"POST",
headers:{'Content-Type': 'application/json'},
body:textoProblema

})

.then(respuesta=>respuesta.json())

.then(data=>{


document.getElementById ("pasos-solucion").innerHTML=data.pasos.join("<br>");

document.getElementById ("resultado-solucion").innerHTML= "Resultado:<br>" +data.resultado;



})

.catch(error=>console.error(error));





}


// Agregamos eventos a los botones 

document.getElementById("analizar-imagen").addEventListener("click", analizarImagen);
document.getElementById("resolver-problema").addEventListener("click", resolverProblema);






