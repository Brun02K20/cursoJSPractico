// SELECCIONO EL ELEMENTO DEL EMAIL DE LA NAVBAR Y TODO EL MENUCITO QUE VA A APARECER Y DESAPARECER
let emailMenu = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");


// SELECCIONO EL ELEMENTO DEL ICONO HAMBURGUESA Y TODA LA LISTA DEL MENU PARA MOVIL
let burgerIcon = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");


// SELECCIONO EL ELEMENTO DEL CARRITO Y DEL ASIDE DE SHOPPING CART
let menuCarIcon = document.querySelector(".navbar-shopping-cart");
let shopCart = document.querySelector(".product-detail");


// AÑADO UN ESCUCHADOR PARA INDICARLE QUE CUANDO SE HAGA CLICK SOBRE EL EMAIL DE LA NAVBAR SE EJECUTE LA FUNCION TOGGLEDESKTOPMENU; MISMA LOGICA PARA EL MENU MOBILE
emailMenu.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click",toggleShoppingCart);

// LA FUNCION TOGGLEDESKTOPMENU
function toggleDesktopMenu(){

    
    isShopCartClosed = shopCart.classList.contains("inactive");
    
    if (!isShopCartClosed){
        shopCart.classList.add("inactive");
    }


    // QUITAR O PONER LA CLASE PASADA POR PARAMETRO
    desktopMenu.classList.toggle("inactive");
}


// FUNCION TOGGLEMMOBILEMENU, MISMA LOGICA QUE LA FUNCION TOGGLEDESKTOPMENU
function toggleMobileMenu(){

    isShopCartClosed = shopCart.classList.contains("inactive");
    
    if (!isShopCartClosed){
        shopCart.classList.add("inactive");
    }


    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart(){

    // Preguntar si mobilemenu y desktopmenu estan abiertos o no
    isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    isDesktopMenuClosed = desktopMenu.classList.contains("inactive");


    // Si estan abierto, añadirles la clase active a su respectivo elemento para que se cierren
    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    // Para intercambiar apertura y cierre del menu cada vez que se de click
    shopCart.classList.toggle("inactive");

    // LA LOGICA DE ESTA FUNCION APLICA A LAS FUNCIONES TOGGLEMOBILEMENU Y TOGGLEDESKTOPMENU
}