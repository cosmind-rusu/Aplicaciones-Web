/* cogemos por su clase */
var acc = document.getElementsByClassName("accordion");
var i;

//recorremos los botones
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Quita y pone (toggle) la clase active al panel 
en el que se haya hecho clic */
    this.classList.toggle("active");
    /* Toggle la visibilidad del panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let texto = "Hija del poeta inglés Lord Byron, Ada Lovelace era una matemática que trabajaba en la máquina analítica de Charles Babbage, para que pudiera realizar cálculos de forma automática. Babbage es considerado como El Padre de la Computación por concebir la idea de lo sería una computadora, y llamaba a Ada “La encantadora de los números";
