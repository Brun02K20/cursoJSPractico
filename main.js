// SELECCIONO EL ELEMENTO DEL EMAIL DE LA NAVBAR Y TODO EL MENUCITO QUE VA A APARECER Y DESAPARECER
let emailMenu = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");


// SELECCIONO EL ELEMENTO DEL ICONO HAMBURGUESA Y TODA LA LISTA DEL MENU PARA MOVIL
let burgerIcon = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

// AÑADO UN ESCUCHADOR PARA INDICARLE QUE CUANDO SE HAGA CLICK SOBRE EL EMAIL DE LA NAVBAR SE EJECUTE LA FUNCION TOGGLEDESKTOPMENU
emailMenu.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);

// LA FUNCION TOGGLEDESKTOPMENU
function toggleDesktopMenu(){

    // QUITAR O PONER LA CLASE PASADA POR PARAMETRO
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}