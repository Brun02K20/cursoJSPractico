// EL QUERYSELECTOR ACEPTA DE ARGUMENTO ETIQUETAS, CLASES, O IDS, LA LOGICA ES LA MISMA QUE LOS SELECTORES CSS

// Es muy importante no olvidar que <querySelector> solo seleccionara al primer elemento que cumpla con lo requerido.
// Mientras que <querySelectorAll> seleccionara a todos los elementos que cumplan con lo requerido.


// SELECCIONANDO LOS ELEMENTOS CON LOS CUALES TRABAJAR
let titulo = document.querySelector("h1");
let first_input = document.querySelector('#primernumero');
let second_input = document.querySelector("#segundonumero");
let btn1 = document.querySelector("#btn-calcular1");
let btn2 = document.querySelector("#btn-calcular2");
let btn3 = document.querySelector("#btn-calcular3");
let btn4 = document.querySelector("#btn-calcular4");
let par = document.querySelector("#show");


let fo = document.querySelector("#formu");

// UNA DE LAS FORMAS DE ESCUCHAR EVENTOS DE ALGUN ELEMENTO EN HTML DESDE JS, AGREGAR EN EL.HTML EL ATRIBUTO ONCLICK (O EL DEL EVENTO DE TURNO) EN EL ELEMENTO CORRESPONDIENTE; A ESOS EVENTOS EN EL HTML, QUE FIGURAN COMO ATRIBUTOS EN EL MISMO, EL VALOR DE DICHOS ATRIBUTOS VA A SER UNA FUNCION ESCRITA EN ESTE ARCHIVO .JS

function calculate1(eventardo){
    console.log(eventardo);

    // Ponemos esto, porque en el addEventListener, pusimos que el evento que debe ejecutarse es el submit, lo cual recarga la pagina y eso no es lo que queremos, asi que para cancelar esa ejecucion pusimos ese eventardo.preventDefault()
    eventardo.preventDefault();
    rdo = parseInt(first_input.value) + parseInt(second_input.value);
    par.innerHTML = "El resultado es: " + String(rdo);
}

// function calculate2(){
//     rdo = parseInt(first_input.value) - parseInt(second_input.value);
//     par.innerHTML = "El resultado es: " + String(rdo);
// }

// function calculate3(){
//     rdo = parseInt(first_input.value) * parseInt(second_input.value);
//     par.innerHTML = "El resultado es: " + String(rdo);
// }

// function calculate4(){
//     rdo = parseInt(first_input.value) / parseInt(second_input.value);
//     par.innerHTML = "El resultado es: " + String(rdo);
// }


// LA OTRA FORMA DE ESCUCHAR EVENTOS EN JS ES CON ADDEVENTLISTENER; SE USA ASI:
// SINTAXIS: elemento.addEventListener("evento", funcion_a_ejecutar);
// NOTA IMPORTANTE: en el primer argumento de "evento", si bien TODOS los eventos empiezan con ON ALGO; ejemplo: onclick; onchange; etc, en este argumento lo debemos escribir sin el ON, es decir, que si yo tengo por ejemplo el evento onclick, en el argumento de esta funcion tengo que poner solamente click. Y con respecto al segundo argumento, se coloca el nombre la funcion sin los tipicos ()

// ENTONCES, LO PRIMERO QUE HACE EL ADDEVENTLISTENER ES LEER DE QUE ELEMENTO SE TRATA, LUEGO INDICARLE CUAL DE TODOS LOS EVENTOS QUEREMOS QUE ESCUCHE, Y POR ULTIMO QUE FUNCION DEBE EJECUTAR, SI LE PUSIESEMOS LOS TIPICOS PARENTESIS A LA FUNCION CUANDO DECLARAMOS EL ADDEVENTLISTENER, SE EJECUTARIA 2 VECES LA FUNCION, PORQUE PRIMERO SE EJCUTARIA LA FUNCION Y DESPUES VERIFICAR CUAL ES EL EVENTO, EN PALABRAS MAS CRIOLLAS, ES COMO QUE EL ADDEVENTLISTENER VA A PONERLE LOS PARENTESIS POR SI MISMO

// btn1.addEventListener("click", calculate1);
// btn2.addEventListener("click", calculate2);
// btn3.addEventListener("click", calculate3);
// btn4.addEventListener("click", calculate4);

// LA IDEA ES COMO DECIR, ESCUCHA CADA VEZ QUE SUCEDA CIERTO EVENTO, Y CADA VEZ QUE PASE EJECUTA EL CODIGO QUE TE DIGA

fo.addEventListener("submit", calculate1);