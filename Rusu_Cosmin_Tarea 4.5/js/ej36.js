// INICIALIZAMOS
let frase = prompt("Ingresa una frase:");
let vocales = frase.match(/[aeiou]/gi) || [];
let consonantes = frase.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
// REALIZAMOS EL PROCESO
let i = 0;
while (i < frase.length) {
    if (frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u") {
        vocales.push(frase[i]);
    } else {
        consonantes.push(frase[i]);
    }
    i++;
}
// MOSTRAMOS LOS DATOS
document.write("Vocales:" + vocales + "\n" );
document.write("Consonantes:" + consonantes);