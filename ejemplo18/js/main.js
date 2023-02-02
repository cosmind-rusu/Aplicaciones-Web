
// DECLARACION DE VARIABLES
let edad;
let años = " años";

// DECLARACION DE VARIABLES

edad = prompt("Dime la edad que tienes:", "0");

if( edad == null ){
    document.write("No has introducido una edad");
}else{
    document.write("Tu edad es: " + edad + años);
}

titulo=document.getElementById("entrada").innerText;
document.getElementById("salida").innerText=titulo;

function cajita () {
    let edad;
    edad=document.getElementById("edad").value;
    document.write("<p>La edad de es: </p>" + edad);
}

cajita();

