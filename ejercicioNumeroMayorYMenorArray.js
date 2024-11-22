//calcular numero mayor y menor en un arreglo 

let arrayNumeros=[11,111,4,5,23,9,8,-5];
let numMay=0, numMenor=0;

for(let i =0; i<arrayNumeros.length;i++){
    console.log(arrayNumeros[i])
    if(arrayNumeros[i]>numMay){
        numMay = arrayNumeros[i]
        console.log(numMay)
        numMenor = numMay
        console.log(numMenor)
    }
    else if(numMenor > arrayNumeros[i]){
        numMenor=arrayNumeros[i];
        console.log(numMenor)

    }

}
console.log(numMenor)
console.log(numMay)