// Obtiene el elemento con el id del div del modal.
var modal = document.getElementById("modal_traslados");
// Obtiene el elemento con el id
var link = document.getElementById("btn_traslados_hotel");
// Obtiene el elemento con la clase para cerrar el modal ubicada en la cabecera/header del modal. Se representa con "X".
var span = document.getElementsByClassName("modal_close")[0];

// Función que muestra todo el div del modal al seleccionar el enlace.
link.onclick = function() {
    modal.style.display = "block";
}
// Función que cierra el modal al darle clic a la "X".
span.onclick = function() {
    modal.style.display = "none";
}
// Función que cierra el modal al darle fuera de la ventana emergente.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}