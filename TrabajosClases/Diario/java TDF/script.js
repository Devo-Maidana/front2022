"use strict";



let btn_nombre =document.getElementById("btn_nombre");
btn_nombre.addEventListener("click",mostrar );




function mostrar(){
    let nombre = "anonimo";
    let inputNombre= document.getElementById("inputNombre");
    nombre = inputNombre.value;
    alert("Hola bienvenido " + nombre);

}