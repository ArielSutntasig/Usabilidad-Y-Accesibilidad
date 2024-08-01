function redirectToId(id) {
  // Almacena el ID en el almacenamiento local
  localStorage.setItem("redirectId", id);
  // Redirige al hash
  window.location.hash = id;
}

// Evento que se ejecuta cuando el contenido del DOM se ha cargado
document.addEventListener("DOMContentLoaded", function () {
  // Establece el ID del elemento que quieres enfocar
  const id = "main-title";
  redirectToId(id);

  // Obtiene el ID almacenado en el almacenamiento local
  const storedId = localStorage.getItem("redirectId");
  if (storedId) {
    // Encuentra el elemento por ID
    const element = document.getElementById(storedId);
    if (element) {
      // Enfoca el elemento para que el lector de pantalla lo lea
      element.setAttribute("tabindex", "-1"); // Asegura que el elemento sea enfocable
      element.focus();
      // Limpia el almacenamiento local
      localStorage.removeItem("redirectId");
    }
  }
});

function toggleInfo(id) {
  var info = document.getElementById(id);
  if (info.classList.contains("hidden")) {
    info.classList.remove("hidden");
    info.setAttribute("aria-hidden", "false");
    info.previousElementSibling.setAttribute("aria-expanded", "true");
  } else {
    info.classList.add("hidden");
    info.setAttribute("aria-hidden", "true");
    info.previousElementSibling.setAttribute("aria-expanded", "false");
  }
}
