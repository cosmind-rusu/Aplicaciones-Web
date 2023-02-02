function ej45() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let direccion = document.getElementById("direccion").value;
  let codigoPostal = document.getElementById("codigoPostal").value;
  document.getElementById("respuesta").innerHTML = "Nombre completo: " + nombre + " " + apellido + "<br>" + "Dirección: " + direccion + "<br>" + "Código Postal: " + codigoPostal;
}
