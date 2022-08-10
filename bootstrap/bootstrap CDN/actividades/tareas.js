let nuevaTarea = document.getElementById("Tarea");

let botoncargar= document.getElementById("guardarTarea");


let botonLimpiar= document.getElementById("limpiarLista");


let lista = document.getElementById("lista");
botoncargar.addEventListener("click",agregarElemento);

botonLimpiar.addEventListener("click",limpiar);



    
    
   
    
   
    
      function agregarElemento(){
    
        let li = document.createElement("li");
        li.innerHTML = nuevaTarea.value;
        lista.appendChild(li);
        }


        function limpiar() {
            lista.innerHTML = " ";
          }   
