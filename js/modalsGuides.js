// ================================================== Guías y excursiones ======================================================

//Modales de excursiones.html
var modalGuias = document.getElementById("modal_guias");
var modalExcursiones = document.getElementById("modal_excursiones");

//Links ubicados en excursiones.html
var linkGuias = document.getElementById("btn_guias");
var linkExcursiones = document.getElementById("btn_excursiones");

//Funciones para abrir modales en las opciones de excursiones.html
//Guía
linkGuias.onclick = function() {
    modalGuias.style.display = "block";
}
//Excursión
linkExcursiones.onclick = function() {
    modalExcursiones.style.display = "block";
}

// ================================================= General ===================================================================

// Obtiene el elemento con la clase para cerrar el modal ubicada en la cabecera/header del modal. Se representa con "X".
var span = document.getElementsByClassName("modal_close")[0];

// Función que cierra el modal al darle clic a la "X".
span.onclick = function() {
    modalGuias.style.display = "none";
    modalExcursiones.style.display = "none";
}
// Función que cierra el modal al darle fuera de la ventana emergente.
window.onclick = function(event) {
    if (event.target == modalGuias || event.target == modalExcursiones) {
        modalGuias.style.display = "none";
        modalExcursiones.style.display = "none";
    }
}