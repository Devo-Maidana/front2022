let total = 0;

let productos = [];
let preciosUnitarios = [];
let cantidadDeProducto = [];

let miLista = document.querySelector(".misCompras");


let botonAgregar = document.getElementById("agregarProducto");
botonAgregar.classList.add("colorRojo");
botonAgregar.addEventListener("click",agregarProductoAlCarrito);

let botonCalcular = document.getElementById("calcularTotal");
botonCalcular.addEventListener("click", calcularCompra);

let botonTogglear = document.getElementById("toggleButton");
botonTogglear.addEventListener("click",toggleFunction);

function agregarProductoAlCarrito(){

    let producto = document.querySelector(".productoUnico").value;
    productos.push(producto);

    let precio = parseInt(document.querySelector(".precioUnitario").value);
    preciosUnitarios.push(precio);

    let cantidad = parseInt(document.querySelector(".cantidadUnitaria").value);
    cantidadDeProducto.push(cantidad);

    let miItem = document.createElement("li");
    miItem.innerHTML = producto + "- " + cantidadDeProducto + " - " + precio; 

    miItem.classList.add("button");

    miLista.appendChild(miItem);

}




function calcularCompra(){
    for(let i=0; i<productos.length;i++){
        total = total + parseInt((preciosUnitarios[i] * cantidadDeProducto[i]));
    }
    document.querySelector("h1").innerHTML = "total de su compra " + total;
}


function toggleFunction(){
    document.querySelector("h2").classList.toggle("ocultar");
}