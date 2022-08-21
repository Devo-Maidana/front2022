let cantidadDeVeces7 = 0;

let btnLanzar = document.getElementById("btnLanzar");
btnLanzar.addEventListener("click",lanzar);


function lanzar() {

let dado1=0;
let dado2=0;



for (let i=0; i<1000;++ ) {

    dado1 = Math.floor((Math.random()*(6 - 1 + 1))+1);
    dado1 = Math.floor((Math.random()*(6 - 1 + 1))+1);
    if ((dado1 + dado2)=== 7) {
         cantidadDeVeces7++;

    }


}


document.getElementById("resultado").innerHTML = "cantidad de veces que salio 7: " + cantidadDeVeces7;
cantidadDeVeces7 = 0;
}