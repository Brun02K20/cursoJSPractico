// SELECCIONO EL ELEMENTO DEL EMAIL DE LA NAVBAR Y TODO EL MENUCITO QUE VA A APARECER Y DESAPARECER
let emailMenu = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");


// SELECCIONO EL ELEMENTO DEL ICONO HAMBURGUESA Y TODA LA LISTA DEL MENU PARA MOVIL
let burgerIcon = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");


// SELECCIONO EL ELEMENTO DEL CARRITO Y DEL ASIDE DE SHOPPING CART
let menuCarIcon = document.querySelector(".navbar-shopping-cart");
let shopCart = document.querySelector(".product-detail");


// SELECCIONO EL CARDS-CONTAINER Y EL MAIN-CONTAINER DE LA LISTA DE PRODUCTOS DE LA PAGINA PRINCIPAL, LA LISTA DE PRODUCTOS QUE ESTA DISEÑADA CON CSS GRID
let productCardsContainer = document.querySelector(".cards-container");
let mainContainer = document.querySelector(".main-container");

// SELECTORES RELACIONADOS AL PRODUCT DETAIL
let productDetailContainer = document.querySelector(".product-detail-secondary");
let productDetailCloseIcon = document.querySelector(".product-detail-secondary-close");

// aca
let imagen = document.querySelector("#img_product");
let precio = document.querySelector("#product_price");
let nombre = document.querySelector("#product_name");
let descripcion = document.querySelector("#product_description");

// AÑADO UN ESCUCHADOR PARA INDICARLE QUE CUANDO SE HAGA CLICK SOBRE EL EMAIL DE LA NAVBAR SE EJECUTE LA FUNCION TOGGLEDESKTOPMENU; MISMA LOGICA PARA EL MENU MOBILE, EL CARRITO, ETC
emailMenu.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click",toggleShoppingCart);
productDetailCloseIcon.addEventListener("click",closeProductDetailAside);

// LA FUNCION TOGGLEDESKTOPMENU
function toggleDesktopMenu(){

    isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");
    isShopCartClosed = shopCart.classList.contains("inactive");
    
    if (!isShopCartClosed){
        shopCart.classList.add("inactive");
    }

    if(!isProductDetailAsideClosed){
        productDetailContainer.classList.add("inactive");
    }

    // QUITAR O PONER LA CLASE PASADA POR PARAMETRO
    desktopMenu.classList.toggle("inactive");
}


// FUNCION TOGGLEMMOBILEMENU; TOGGLESHOPPINGCART, MISMA LOGICA QUE LA FUNCION TOGGLEDESKTOPMENU
function toggleMobileMenu(){
    isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");
    isShopCartClosed = shopCart.classList.contains("inactive");
    
    if (!isShopCartClosed){
        shopCart.classList.add("inactive");
    }

    if(!isProductDetailAsideClosed){
        productDetailContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart(){

    // Preguntar si mobilemenu; desktopmenu; productDetailAside estan abiertos o no
    isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");

    // Si estan abierto, añadirles la clase active a su respectivo elemento para que se cierren
    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    if(!isProductDetailAsideClosed){
        productDetailContainer.classList.add("inactive");
    }

    // Para intercambiar apertura y cierre del menu cada vez que se de click
    shopCart.classList.toggle("inactive");

    // LA LOGICA DE ESTA FUNCION APLICA A LAS FUNCIONES TOGGLEMOBILEMENU Y TOGGLEDESKTOPMENU
}


// Para abrir el detalle de producto
function openProductDetailAside(event){
    shopCart.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");   // aca
    imagen.setAttribute("src", event.target.src);
    precio.innerText = event.target.nextElementSibling.innerText;
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

// VAMOS A HACER REUTILIZACION DE CODIGO PARA GENERAR LOS PRODUCTOS EN LA PAGINA PRINCIPAL; VAMOS A MAQUETAR LOS PRODUCTOS DESDE JS PARA NO TENER CADA PUTO PRODUCTO EN LOS HTML, ES INSANO Y LOCO XDDDDD

// LO PRIMERO ES CREAR UN ARRAY DE PRODUCTOS, ES DECIR, CADA PRODUCTO ES UN OBJETO POR LO TANTO NECESITAREMOS UN ARRAY DE OBJETOS
let productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Car",
    price: 20000,
    image: "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Game of garden",
    price: 450,
    image: "https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Black Chair",
    price: 30,
    image: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Desk lamp",
    price: 120,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Macbook Air",
    price: 3500,
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Set of ties",
    price: 200,
    image: "https://images.pexels.com/photos/130855/pexels-photo-130855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Apple Smartphone",
    price: 840,
    image: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Clock",
    price: 40,
    image: "https://images.pexels.com/photos/1010480/pexels-photo-1010480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Purse",
    price: 200,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "School Bag",
    price: 120,
    image: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Books",
    price: 250,
    image: "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Book TAKE THE RISK",
    price: 130,
    image: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Tea set",
    price: 400,
    image: "https://images.pexels.com/photos/1470008/pexels-photo-1470008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Clothing",
    price: 400,
    image: "https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})


// AHORA LO QUE TOCA ES INTRODUCIR ESE ARRAY DE OBJETOS EN NUESTRO HTML; PARA ESO DEBO RECORRER ESE ARRAY MEDIANTE UN FOR

// Y PARA RECORRER ARRAYS APARTE DEL TIPICO FOR(I=0;I<ARR.LENGTH;I++) TENEMOS EL FOR (I OF ARRAYNAME); EN CADA RECORRIDO DEL CICLO PRODUCT SERA IGUAL AL OBJETO DE TURNO PERTENECIENTE AL ARRAY PRODUCT LIST


/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$120.00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>   
</div> 
*/

// EN DEFINITIVA, ESTE FOR RECORRE EL ARREGLO DE PRODUCT LIST, MAQUETA LA PRODUCT CARD CORRESPONDIENTE Y LA MUESTRA POR PANTALLA AUTOMATICAMENTE 

function renderPorducts(arr){
    for (product of arr){

        // ACA RECREAMOS LO QUE ESTA EN EL CODIGO HTML DE ARRIBA, PERO FALTARIA UNIR TODOS ESOS ELEMENTOS, SE HACE MAS ABAJO
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        let product_Image = document.createElement("img");
        product_Image.classList.add("product-img");
        product_Image.setAttribute("src", product.image);
        product_Image.addEventListener("click", openProductDetailAside)
    
        let productInformation = document.createElement("div");
        productInformation.classList.add("product-info");
    
        let productDiv = document.createElement("div");
    
        let productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        let productName = document.createElement("p");
        productName.innerText = product.name;
    
        let productFigure = document.createElement("figure");
        let add_To_Cart_Button = document.createElement("img");
        add_To_Cart_Button.setAttribute("src", "icons/bt_add_to_cart.svg");
    
    
        // ACA VAMOS UNIENDO TODAS LAS COSAS
        productFigure.appendChild(add_To_Cart_Button);
        productDiv.append(productPrice,productName);
        productInformation.append(productDiv,productFigure);
        productCard.append(product_Image,productInformation);
    
        // YA CREAMOS LA TARJETITA DEL PRODUCTO, LO QUE NOS FALTA ES AÑADIR ESA TARJETITA AL CARDS-CONTAINER
    
        productCardsContainer.append(productCard);
    };
};


renderPorducts(productList);


// EL FOR (PRODUCT IN PRODUCT) LO QUE VA A HACER ES QUE TE IMPRIME LA POSICION DEL PRODUCTO EN EL ARRAY