// haz un bucle for anidado
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// haz un bucle while anidado
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// haz un bucle for que diga "luis es gay"
for (let i = 0; i < 10; i++) {
    console.log("luis es gay");
}

// haz un bucle while que diga "luis es gay"
let i = 0;
while (i < 10) {
    console.log("luis es gay");
    i++;
}

// crea una funcion basica en JavaScript
function suma(a, b) {
    return a + b;
}

// crea una funcion basica en JavaScript
function multiplicacion(a, b) {
    return a * b;
}
// 

// crea un reloj en javascript cogiendo la hora del ordenador y con segundos
let reloj = setInterval(() => {
    console.log(new Date());
}, 1000);

// haz un script que escriba en pantalla 3 div con una funcion basica de javascript de calculo
let div = document.createElement("div");
div.innerHTML = "Hola mundo";
div.style.color = "red";
div.style.fontSize = "20px";
div.style.fontWeight = "bold";
div.style.textAlign = "center";
document.body.appendChild(div);

// haz un script que escriba en pantalla 3 div con una funcion
let div = document.createElement("div");
div.innerHTML = "Hola mundo";
div.style.color = "red";
div.style.fontSize = "20px";
div.style.fontWeight = "bold";
div.style.textAlign = "center";
div.onclick = () => {
    console.log(new Date());
};
document.body.appendChild(div);

// haz un script que escriba en pantalla 3 div con una funcion