/* Ejemplo:máximo
Este script muestra true o false 
si el primer número es mayor o no, 
respectivamente, que el segundo */
var primerNumero = 42;
var segundoNumero = 80;

var esMayor; //true si es mayor y false si es menor
//es la que mostraré

//Buscar la condición que me dice si es mayor
esMayor = primerNumero > segundoNumero; //los() no son obligatorios

//mostrar el resultado
document.write(
  primerNumero + " es mayor que " + segundoNumero + ": " + esMayor
);

//Segunda forma con el operador ternario
var mensaje;
/*mensaje=(primerNumero>segundoNumero)?
primerNumero + " es mayor que " + segundoNumero :
primerNumero + " no es mayor que " + segundoNumero ;
*/
//alternativamente
mensaje = esMayor
  ? primerNumero + " es mayor que " + segundoNumero
  : primerNumero + " no es mayor que " + segundoNumero;

document.write("<p>" + mensaje + "</p>");

//Tercera forma: usar un if
var mensaje2;
if (primerNumero > segundoNumero) {
  mensaje2 = primerNumero + " es mayor que " + segundoNumero;
  //mostrar el mensaje si quiero
} else {
  mensaje2 = primerNumero + " no es mayor que " + segundoNumero;
  //mostrar el mensaje si quiero
}
document.write("<p>" + mensaje2 + "</p>");

/* Determinar si un número es múltiplo de otro dado */
var n1 = 20; //primer número, el que será múltiplo o no del otro
var n2 = 3; //segundo número

var esMultiplo;

//calculo si es o no múltiplo
esMultiplo = n1 % n2 == 0;
//muestro el resultado
document.write(n1 + " es multiplo de " + n2 + ": " + esMultiplo);

/*un año es bisiesto si es múltiplo de 4
PERO  los múltiplos de 100 no son
PERO cada 400 años lo vuelve a ser */
var anyo = 2022;
var mensaje;
var esMulti4, esMulti100, esMulti400;
esMulti4 = anyo % 4 == 0;
esMulti100 = anyo % 100 == 0;
esMulti400 = anyo % 400 == 0;

if ((esMulti4 && !esMulti100) || esMulti400) {
  mensaje = anyo + " es bisiesto";
} else {
  mensaje = anyo + " no es bisiesto";
}
document.write("<p>" + mensaje2 + "</p>");
