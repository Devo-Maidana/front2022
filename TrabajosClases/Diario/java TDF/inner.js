

let botonLista= document.getElementById("botonLista");
botonLista.addEventListener("click",agregarElemento);




function agregarElemento(){
    
let lista = document.getElementById("lista");
let inputLista = document.getElementById("inputLista");
let elemento = document.createElement("li");
elemento.innerHTML = inputLista.value;
lista.appendChild(elemento);

}


let botonParrafo = document.getElementById("botonParrafo");
botonParrafo.addEventListener("click",agregarParrafo);

let  divParrafo = document.getElementById("divParrafo");
let inputParrafo = document.getElementById ("inputParrafo");

function agregarParrafo(){

   
   
    let parrafo = document.createElement("p");
    
    parrafo.innerHTML = inputParrafo.value;
    divParrafo.appendChild(parrafo);

}

