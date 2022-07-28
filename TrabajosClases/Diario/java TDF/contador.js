"Use Strict"
let contador = 0;

let btn_contar = document.getElementById("contador");
btn_contar.addEventListener("click",contarClick);

let btn_mostrar = document.getElementById("mostrarClicks");
btn_mostrar.addEventListener("click",mostrarClick);

function contarClick () {
    contador++
    console.log(contador)
}

function mostrarClick () {
    alert(contador)
}