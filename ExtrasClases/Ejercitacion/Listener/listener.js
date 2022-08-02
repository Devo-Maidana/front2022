
alert (hola);

let contador = 0;

let botonContar = document.getElementById("sumarClicks");
botonContar.addEventListener("click",contarClick);

let botonMostrar = document.getElementById("mostrarCantidadDeClicks");
botonMostrar.addEventListener("click",mostrarClicks);

let botonRestar = document.getElementById("restarCliks");
botonRestar.addEventListener("click",restarClick);

function contarClick(){

    contador++;
    document.querySelector("h1").innerHTML = contador;
}


function restarClick(){

    contador--;
    document.querySelector("h1").innerHTML = contador;
}


function mostrarClicks(){

    
    document.querySelector("h1").innerHTML = contador;
}