let tabla = [];

// Crea una matriz vacía de 10 filas y 5 columnas
for (let i = 0; i < 10; i++) {
    tabla[i] = new Array(5);
}

// Solicita al usuario que ingrese los datos de la tabla
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        tabla[i][j] = prompt("Ingrese el valor de la celda [" + (i+1) + "][" + (j+1) + "]");
    }
}

// Muestra los datos de la tabla en forma de tabla
let tablaHTML = "<table>";
for (let i = 0; i < 10; i++) {
    tablaHTML += "<tr>";
    for (let j = 0; j < 5; j++) {
        tablaHTML += "<td>" + tabla[i][j] + "</td>";
    }
    tablaHTML += "</tr>";
}
tablaHTML += "</table>";
document.write(tablaHTML);
