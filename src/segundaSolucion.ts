let dato = document.getElementById("dato");

btnSend.addEventListener("click", () => {
  switch (Number(dato.value)) {
    case 1:
      console.log("Medalla de oro");
      break;
    case 2:
      console.log("Medalla de plata");
      break;
    case 3:
      console.log("Medalla de bronce");
      break;
    default:
      console.log("Mencion por participacion")
  }
})