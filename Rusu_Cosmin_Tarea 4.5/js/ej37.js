let frase = prompt("Ingresa una frase:");
let letra = prompt("Ingresa una letra:");
let lugarLetra = frase.split('').indexOf(letra);
document.write(`La letra "${letra}" se encuentra en la posición "${lugarLetra}" de la frase "${frase}".`);
