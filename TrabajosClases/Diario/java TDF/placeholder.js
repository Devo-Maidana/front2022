"Use Strict"
let contador = 0;

let btnContar = document.getElementById("contador");
btnContar.addEventListener("click",contarClick);

let btnMostrar = document.getElementById("mostrarClicks");
btnMostrar.addEventListener("click",mostrarClick);


let nombreActual = document.getElementById("ingreseNombre");
nombreActual.addEventListener("input",saludo);


function contarClick () {
    contador++
    console.log(contador)
}

function mostrarClick () {
    alert(contador)
}





function saludo (){

console.log(nombreActual.value);
}