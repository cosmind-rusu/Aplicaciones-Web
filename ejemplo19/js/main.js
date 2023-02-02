
// DECLARACION DE VARIABLES
/* let n=prompt;
let contador;


for(contador=1;contador<n;contador++) {
    document.write(contador + "</br>");
}
document.write("<h3>Se acabó el bucle: El contenedor vale</h3>" + contador);
 */

let numero;

numero = prompt("Introduce numeros positivos, 0 o negativo para terminar", "0" );
while(numero>0){
    document.write("Has introducido" + numero);
    numero = prompt("Introduce un numero positivo");
    
}
