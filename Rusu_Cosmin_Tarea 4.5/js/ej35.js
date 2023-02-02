// CREAMOS LOS ARREGLOS
let arreglos = [];
for (let i = 0; i < 10; i++) {
    let num = parseFloat(prompt("Ingrese un número:"));
    arreglos.push(num);
}
// HACEMOS LA OPERACION
let suma = 0;
for (let i = 0; i < arreglos.length; i++) {
    suma += arreglos[i];
}

let media = suma / arreglos.length;

// MOSTRAMOS LOS DATOS
document.write("Suma: " + suma + "\n");
document.write("Media aritmetica: " + media);