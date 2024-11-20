//operadores de comparacion
//==, ===, !=, !==, <, >, <=, >=.
let a = 5, b="5";

console.log(a);
console.log(b)

//operadores de igualdad == 
//solo compara valores y hace una conversion si es necesario

console.log("a == b -> ", a==b);

//=== compara tambien el tipo de dato en este caso son dos tipos de datos diferentes 
//uno es string y el otro es numerico 
//a esto se le llama igualdad estricta
console.log("a === b -> ", a===b);

//string interpolation 
console.log(`${a} === ${b} -> ${a===b}`)

//operador distinto 
//compara valor y convierte el tipo de dato si es necesario 

console.log(`${a} != ${b} -> ${a!=b}`)

//operador distinto exacto 
//compara valor y tipo de dato no hace conversion

console.log(`${a} !== ${b} -> ${a!==b}`)
//si es distinto porque son dos tipos de datos diferentes 


//operador menor que 
console.log(`${a} < ${b} -> ${a<b}`)
//operador menor igual que 
console.log(`${a} <= ${b} -> ${a<=b}`)

//operador mayor que 
console.log(`${a} < ${b} -> ${a<b}`)
//operador mayor igual que 
console.log(`${a} >= ${b} -> ${a>=b}`)



