//cadenas y funciones 
//cadenas inmutables (cadena que no se puede modificar su valor)

function cambiarValor(parametro){
    parametro="adios"
}


let argumento = "hola"
console.log(`antes de llamar a la funcion: ${argumento}`)
cambiarValor(argumento)
console.log(`despues de llamar a la funcion: ${argumento}`)