//paso por referencia
//los tipos primitivos siempre se pasan por valor 

function pasoReferencia(parametro){
    parametro[0]=55
}

let argumento=[1];
console.log(`valor de argumento antes de llamar a la funcion ${argumento[0]}`)
pasoReferencia(argumento)
console.log(`valor de argumento despues de llamar a la funcion ${argumento[0]}`)