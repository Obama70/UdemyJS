//sumar renglones y columnas en una matriz

let matrizNumeros=[[7,8],[8,8],[99,9],[62,21]]
let sumRow=[];
let sumCol=[];
let sumThings=0;

for(let row =0; row<matrizNumeros.length; row++){
    for(let col =0; col<matrizNumeros[row].length; col++){
        console.log(matrizNumeros[row][col])
        sumThings += matrizNumeros[row][col];
        sumThings
        sumCol[row]=sumThings
    }
}

for(let i=0; i<sumCol.length; i++){
    console.log(sumCol[i])
}
