
let asignatura = ["SOR", "AW", "IG", "IEI", "SI", "SR"];

let horario = "<table>";
horario += "<tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr>";

for (let i = 0; i < 6; i++) {
  let startTime = 8 + i;
  horario += "<tr><td>" + startTime + ":30 - " + (startTime + 1) + ":30</td>";
  for (let j = 0; j < 5; j++) {
    horario += "<td>" + asignatura[i] + "</td>";
  }
  horario += "</tr>";
}
horario += "</table>";

document.getElementById("horario").innerHTML = horario;
