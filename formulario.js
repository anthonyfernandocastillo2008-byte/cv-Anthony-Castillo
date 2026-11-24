
// Seleccionar el formulario
const formulario = document.getElementById("formulario");

// Seleccionar el mensaje de respuesta
const respuesta = document.getElementById("respuesta");

// Detectar cuando se envía el formulario
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Mostrar una respuesta
    respuesta.textContent = "¡Gracias por apoyar el cuidado del agua! 💧";

    // Limpiar el formulario
    formulario.reset();

});
