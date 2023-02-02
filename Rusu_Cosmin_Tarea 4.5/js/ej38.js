// DECLARAMOS
const frase = prompt("Ingresa una frase:");
const fraseArray = frase.split("");

// PROCESO
while (fraseArray.length > 0) {
    const letra = prompt("Ingresa una letra a buscar:");
    let encontrado = false;
    for (let i = 0; i < fraseArray.length; i++) {
        if (fraseArray[i] === letra) {
            document.write(`La letra "${letra}" se encuentra en la posición ${i}. `);
            encontrado = true;
        }
    }
    // MOSTRAMOS DATOS
    if (!encontrado) {
        document.write(` La letra "${letra}" no se encuentra en la frase.`);
    }
    const BuscaMas = prompt("¿Quieres seguir buscando? (s/n)").toLowerCase();
    if (BuscaMas === "n") {
        break;
    }
}
