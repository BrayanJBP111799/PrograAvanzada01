filterTravel("all")
//Manejo en agregr/eliminar la clase "show_travel" de los divs con el contenido de los paquetes
function filterTravel(type_travel) {
    var divTravel;
    var i;
    divTravel = document.getElementsByClassName("travel_box");
    if (type_travel == "all") type_travel = "";
    for (i = 0; i < divTravel.length; i++) {
        removeClass_Show(divTravel[i], "show_travel");
        if (divTravel[i].className.indexOf(type_travel) > -1) addClass_Show(divTravel[i], "show_travel");
    }
}

//Función para agregar la clase "show_travel" a los divs con la opción seleccionada en los botones.
function addClass_Show(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

//Función para eliminar la clase "show_travel" a los divs que no corresponden a la opción seleccionada.
function removeClass_Show(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

//Manejo de todos los botones del filtro. Contiene una función para agregar y eliminar la clase "active_state" para el manejo de filtro.
var btnContainer = document.getElementById("filter_options");
var btns = btnContainer.getElementsByClassName("btn_option");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active_state");
        current[0].className = current[0].className.replace(" active_state", "");
        this.className += " active_state";
    });
}