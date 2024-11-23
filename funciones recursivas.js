//funciones recursivas
//imprimir numeros de manera descendente 


function cuenta(numeros){
    
    if(numeros==0){
        console.log(numeros);
    }
    else{
        console.log(numeros)
        cuenta(numeros-1)
        
    }
}


let c=5;
cuenta(c)