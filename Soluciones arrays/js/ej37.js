// DECLARACION
let frase = Array()
let car;
let letra;
// ENTRADA DE DATOS
i=0;
letra=prompt("Siguiente letra: ")
for (i = 0; i < frase.length; i++) {
    if(frase[i]==car){
        document.write(`Hay una letra + ${car} + ${i}`)
    }
}
// ALGORITMO
let buscarMas;
buscarMas = true;
i = 0;

while (buscarMas && i < frase.length) {
    if(frase[i]==car){
        document.write(`Hay una letra + ${car} + ${i}`)
        buscarMas = false;
    } else {
       let yesno = prompt("Quieres buscar mas?")
    }
}

// SALIDA DE DATOS



