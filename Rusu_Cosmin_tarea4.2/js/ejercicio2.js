
let tiempo = parseFloat(prompt("Introduce el tiempo: "));
let distancia = parseFloat(prompt("Introduce la distancia:"));
let velocidad;

function calculo () {
    velocidad = distancia / tiempo;
   alert(`La velocidad es: ${velocidad}`);
}
calculo();