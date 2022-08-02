// Agrega elementos a la lista

let botonLista = document.getElementById("botonLista");
let lista = document.getElementById("lista");
let inputLista = document.getElementById("inputLista");

function agregarElemento(){
    let elemento = document.createElement("li");
    elemento.innerHTML = inputLista.value;
    lista.appendChild(elemento);
}

// agrega parrafo al div

let botonParrafo = document.getElementById("botonParrafo");

function agregarParrafo(){
    let divParrafo = document.getElementById("divParrafo");
    let parrafo = document.createElement("p");
    let inputParrafo = document.getElementById("inputParrafo");
    parrafo.innerHTML = inputParrafo.value;
    divParrafo.appendChild(parrafo);
}


