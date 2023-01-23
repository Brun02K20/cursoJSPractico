// SELECCIONO EL ELEMENTO DEL EMAIL DE LA NAVBAR Y TODO EL MENUCITO QUE VA A APARECER Y DESAPARECER
let emailManu = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

// AÑADO UN ESCUCHADOR PARA INDICARLE QUE CUANDO SE HAGA CLICK SOBRE EL EMAIL DE LA NAVBAR SE EJECUTE LA FUNCION TOGGLEDESKTOPMENU
emailManu.addEventListener("click", toggleDesktopMenu);

// LA FUNCION TOGGLEDESKTOPMENU
function toggleDesktopMenu(){

    // QUITAR O PONER LA CLASE PASADA POR PARAMETRO
    desktopMenu.classList.toggle("inactive");
}