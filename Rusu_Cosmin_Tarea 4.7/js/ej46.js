function ej46() {
    let nombreCompleto = prompt("Ingresa tu nombre completo en formato: 'Nombre Apellido Segundo Apellido' ");
    let arrayNombre = nombreCompleto.split(" ");
    let resultado = `${arrayNombre[1]} ${arrayNombre[2]}, ${arrayNombre[0]}`;
    document.write(resultado);
}
