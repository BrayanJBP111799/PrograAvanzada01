//Función para agregar clase ".active" al menú superior para mostrar/ocultar opciones.
function toggleMenu(){
    const menuOption = document.querySelector('.display_menu');
    const menu = document.querySelector('.menu');
    menuOption.classList.toggle('active');
    menu.classList.toggle('active');
}