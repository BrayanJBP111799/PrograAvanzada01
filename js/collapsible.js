// Función para cerrar/abrir cada botón del acordeón con su contenido
function toggleContent(content) {
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
// Función para cerrar todos los botones del acordeón. Usado al cerrar el modal y restablecer el acordeón.
function collapseAllOpenContent() {
    const colls = document.getElementsByClassName('collapsible');
    for (const coll of colls) {
        if (coll.classList.contains('active')) {
            coll.classList.remove('active');
            toggleContent(coll.nextElementSibling);
        }
    }
}

// Código encargado de activar/expandir una opción del acordeón y cerrar las demás al darle clic a alguna de las opciones.
// Usa las dos funciones creadas anteriormente para su cerrar cada opción del acordeón.
const colls = document.getElementsByClassName('collapsible');
    for (const coll of colls) {
        coll.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                collapseAllOpenContent();
            }
                this.classList.toggle('active');
                toggleContent(this.nextElementSibling);
    });
}