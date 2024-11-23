//funciones incorporadas 

//obtener el largo de una cadena 

let cadena = "hola"
console.log(cadena.length)

//no podemos modificar dinamicamente una cadena en js 
//las cadenas son inmutables 
cadena[0]="x"
console.log(cadena)

//si podemos asignar una nueva cadena 
cadena = "adios"
console.log(cadena);

//recorrer cadena caracter 
for(let i=0; i<cadena.length; i++){
    console.log(`indice [${i}] ${cadena[i]}`)
}
