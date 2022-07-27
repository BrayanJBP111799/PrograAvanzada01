// ================================================ Asistencia y Traslados =====================================================
//Modales de traslados.html
var modalHotel = document.getElementById("modal_traslados_hotel");
var modalAsistencia = document.getElementById("modal_asistencia");
var modalPais = document.getElementById("modal_traslados_pais");

//Links ubicados en traslados.html
var linkHotel = document.getElementById("btn_traslados_hotel");
var linkAsistencia = document.getElementById("btn_asistencia");
var linkPais = document.getElementById("btn_traslados_pais");

//Funciones para abrir modales en las opciones de traslados.html
//Traslados de hotel-aeropuerto
linkHotel.onclick = function() {
    modalHotel.style.display = "block";
}
//Asistencia en aeropuerto
linkAsistencia.onclick = function() {
    modalAsistencia.style.display = "block";
}
//Traslados en el país
linkPais.onclick = function() {
    modalPais.style.display = "block";
}


// ================================================= General ===================================================================
// Obtiene el elemento con la clase para cerrar el modal ubicada en la cabecera/header del modal. Se representa con "X".
var span = document.getElementsByClassName("modal_close")[0];

// Función que cierra el modal al darle clic a la "X".
span.onclick = function() {
    modalHotel.style.display = "none";
    modalAsistencia.style.display = "none";
    modalPais.style.display = "none";
}
// Función que cierra el modal al darle fuera de la ventana emergente.
window.onclick = function(event) {
    if (event.target == modalHotel || event.target == modalAsistencia || event.target == modalPais
        || event.target == modalGuias || event.target == modalExcursiones) {
        modalHotel.style.display = "none";
        modalAsistencia.style.display = "none";
        modalPais.style.display = "none";
        modalGuias.style.display = "none";
        modalExcursiones.style.display = "none";
    }
}