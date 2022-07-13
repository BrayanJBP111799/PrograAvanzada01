//Parte del funcionamiento del menú para mantenerlo fixed (sticky) al hacer scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Función para agregar clase ".active" al menú superior para mostrar/ocultar opciones.
function toggleMenu(){
    const menuOption = document.querySelector('.display_menu');
    const menu = document.querySelector('.menu');
    menuOption.classList.toggle('active');
    menu.classList.toggle('active');
}