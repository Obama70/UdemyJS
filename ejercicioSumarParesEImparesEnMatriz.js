//sumar pares e impares en matriz

let matrizNumeros=[[1,2,3],[55,5,8],[28,99,9]]
let sumPar=0, sumImpar =0;

for(let row=0; row<matrizNumeros.length; row++){
    for(let col=0; col<matrizNumeros[row].length; col++){
        if(matrizNumeros[row][col]%2==0){
            console.log(matrizNumeros[row][col])
            sumPar+=matrizNumeros[row][col]
            console.log(sumPar)
        }
        else if(matrizNumeros[row][col]%2==1){
            console.log(matrizNumeros[row][col])
            sumImpar+=matrizNumeros[row][col];
            console.log(sumImpar)
        }
    }
}


console.log(`la suma de los numeros par es de ${sumPar}`)
console.log(`la suma de los numeros impar es de ${sumImpar}`)