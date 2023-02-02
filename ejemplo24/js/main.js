// Sintaxis de la función, intercambiar(elementoHTML, elementoHTML2)
function intercambiar(a, b) {
  var aux;
  aux = a.innerHTML;
  a.innerHTML = b.innerHTML;
  b.innerHTML = aux;
}


