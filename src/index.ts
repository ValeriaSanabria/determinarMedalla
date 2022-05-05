rotulo.innerHTML = "Ingrese la posicion de llegada del competidor";

let posicionLlegada: number = 1;

if (posicionLlegada == 1) {
  console.log("Entregar medalla de oro");
} else {
  if (posicionLlegada == 2) {
    console.log("Entregar medalla de plata");
  } else {
    if (posicionLlegada == 3) {
      console.log("Entregar medalla de bronce");
    } else {
      console.log("Entregar mencion de participacion");
    }
  }
}
