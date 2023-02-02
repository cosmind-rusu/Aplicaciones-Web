let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 }; // Contador de vocales
let frase = prompt("Ingrese una frase:"); // Solicita al usuario que ingrese una frase

// Recorre cada caracter de la frase
for (let i = 0; i < frase.length; i++) {
    let char = frase[i].toLowerCase(); // Convierte el caracter a minúscula
    if (vocales.hasOwnProperty(char)) { // Verifica si el caracter es una vocal
        vocales[char]++; // Incrementa el contador de la vocal correspondiente
    }
}

// Muestra el numero de cada vocal
document.write(`A: ${vocales.a}`);
document.write(`E: ${vocales.e}`);
document.write(`I: ${vocales.i}`);
document.write(`O: ${vocales.o}`);
document.write(`U: ${vocales.u}`);
