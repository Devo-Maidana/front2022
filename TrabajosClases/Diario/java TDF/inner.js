

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





function agregarParrafo(){

   
    let  divParrafo = document.getElementById("divParrafo");
    let parrafo = document.createElement("p");
    let inputParrafo = document.createElement("inputParrafo");
    parrafo.innerHTML = inputParrafo.value;
    divParrafo.appendChild(parrafo);

}

