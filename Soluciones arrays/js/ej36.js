// DECLARACION
let frase = Array(); // no se el tamaño
let vocales= Array(); 
let consonantes= Array(); 

let i; // indice para recorrer el array 

// ENTRADA DE DATOS
//pido letras de una en una y finalizamos en .

let letras;
i = 0;
letra= prompt("Siguiente letra");

while (letra = ".") {
    frase[i] = letra;
    i++
    letra = prompt("Siguiente letra");
}

// ALGORITMO

let j; //indice de las vocales
let k; // indice de las consonantes

for (i = 0; i < frase.length; i++) {
  if (
    frase[i] == "a" ||
    frase[i] == "e" ||
    frase[i] == "i" ||
    frase[i] == "o" ||
    frase[i] == "u" ||
    frase[i] == "A" ||
    frase[i] == "E" ||
    frase[i] == "I" ||
    frase[i] == "O" ||
    frase[i] == "U"
  ) {
    vocales[j] = frase[i]; // la posicion que toque de vocales
    j++;
  } else {
    consonantes[k] = frase[i]; // la posicion que toque de consonantes
    k++;
  }
}

// SALIDA DE DATOS

document.write("La frase era: " + frase.join("") + "<br>");
document.write("Las vocales son: " + vocales.join("") + "<br>");
document.write("Las consonantes son: " + consonantes.join("") + "<br>");


