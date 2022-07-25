"use strict";



let btn_nombre =document.getElementById("btn_nombre");
btn_nombre.addEventListener("click",mostrar );
let btn_apellido =document.getElementById("btn_apellido");
btn_apellido.addEventListener("click",mostrar );
let btn_direccion =document.getElementById("btn_direccion");
btn_direccion.addEventListener("click",mostrar );



function mostrar(){
    let nombre = "anonimo";
    let inputNombre= document.getElementById("inputNombre");
    nombre = inputNombre.value;
    alert("Hola bienvenido " + nombre );

    let apellido = "anonimo";
    let inputApellido= document.getElementById("inputApellido");
    apellido = inputApellido.value;
    alert("Hola bienvenido " + apellido);

    let direccion = "anonimo";
    let inputDireccion= document.getElementById("inputDireccion");
    direccion = inputDireccion.value;
    alert("Hola bienvenido " + direccion);

}