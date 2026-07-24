function irAContenido() {
  window.location.href = "contenido.html";
}

function volverInicio() {
  window.location.href = "index.html";
}

function mostrarExplicacion() {
  const caja = document.getElementById("extra-info");

  if (caja.style.display === "block") {
    caja.style.display = "none";
  } else {
    caja.style.display = "block";
  }
}

function mostrarRespuesta(idRespuesta) {
  const respuesta = document.getElementById(idRespuesta);

  if (respuesta.style.display === "block") {
    respuesta.style.display = "none";
  } else {
    respuesta.style.display = "block";
  }
}
