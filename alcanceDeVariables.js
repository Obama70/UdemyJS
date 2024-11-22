//alcance de variables 


let variableGlobal=5;
//modificar valor 
variableGlobal =10;

//definir funcion

function miFuncion(variableLocal){
    console.log(variableLocal)
    //modificamos el valor de la global
    variableGlobal =20;
    //no podemos redefinir una variable global cuando fue definida con LET
    //let variableGlobal=30;
}

miFuncion(variableGlobal);

