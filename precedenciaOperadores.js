//precedencia de operadors
//.1 parentesis y corchetes
//.2 operadores unarios como -, ++ , --, !
//.3 aritmeticos *,/ y %
//.4 aritmeticos + y -
//.5 relacionales <, <=, > y >=
//.6 igualdad == y !=
//.7 logicos $$ y ||
//.8 asignacion =, =+, -=, etc

//ej se revisa de izq a der 
let a = 12 / 3 + 2 *3 -1;
//paso 1 dividir 12/3=4
//paso 2 multiplicar 2*3=6
//paso 2 sumar 4+6
//paso 4 restar 10-1
//resultado 9
console.log(a)
