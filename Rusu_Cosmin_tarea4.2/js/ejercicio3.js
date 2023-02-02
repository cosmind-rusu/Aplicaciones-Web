
/* 
// LOS LADOS DE L OS TRIANGULOS SON a, b, c
if (a === b && b === c) {
    // Si a, b, c SON IGUALES ES UN EQUILATERO
    alert('El triángulo es equilátero');
} else if (a === b || b === c || a === c) {
    // SI AL MENOS DOS LADOS SON IGUALES, SE TRATA DE UN TRIÁNGULO ISÓSCELES
    alert('El triángulo es isósceles');
} else {
    // SI NINGUNO DE LOS CASOS ANTERIORES SE A CUMPLIDO ENTONCES ES UN ESCALENO
    alert('El triángulo es escaleno');
} */

function triangulitos () {
    // DECLARAMOS LAS VARIABLES Y LE PEDIMOS LOS DATOS AL USUARIO
    let a = parseFloat(prompt('Introduce el lado 1'));
    let b = parseFloat(prompt('Introduce el lado 2'));
    let c = parseFloat(prompt('Introduce el lado 3'));

    // Si a, b, c SON IGUALES ES UN EQUILATERO
    alert(a === b && b === c); 
    
    // SI AL MENOS DOS LADOS SON IGUALES, SE TRATA DE UN TRIÁNGULO ISÓSCELES
    alert(a === b || b === c || a === c);
    // SI NINGUNO DE LOS CASOS ANTERIORES SE A CUMPLIDO ENTONCES ES UN ESCALENO
    alert(a == b == c );
}
triangulitos();
