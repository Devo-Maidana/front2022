


let btn_sumar = document.getElementById("sumar");
btn_sumar.addEventListener("click",Suma);

let btn_restar = document.getElementById("restar");
btn_restar.addEventListener("click",Resta);




function Suma () {
    let sum = document.getElementById("numero1").value;
    let sum2 = document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML = sum + sum2;
   
}

function Resta () {
 
    let res = document.getElementById("numero1").value;
    let res2 = document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML = res-res2;

}


