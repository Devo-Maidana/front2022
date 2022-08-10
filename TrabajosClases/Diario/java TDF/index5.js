

let botonLista= document.getElementById("botonLista");
botonLista.addEventListener("click",agregarElemento);




function agregarElemento(){
    
let lista = document.getElementById("lista");
let inputLista = document.getElementById("inputLista");
let elemento = document.createElement("li");
elemento.innerHTML = inputLista.value;
lista.appendChild(elemento);

}