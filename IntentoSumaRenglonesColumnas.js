//sumar renglones y columnas en una matriz

let matrizNumeros=[[7,8],[8,8],[99,9],[62,21]]
let sumRow=[];
let sumCol=[];
//en esta variable se van a guardar la suma de los renglones
let sumThings=0;

for(let row =0; row<matrizNumeros.length; row++){
    for(let col =0; col<matrizNumeros[row].length; col++){
        console.log(matrizNumeros[row][col])
        sumThings += matrizNumeros[row][col];
        //sumthings va guardando todos los resultados
        // necesitamos hacer que sumthings guarde la suma cada que sale de un renglon
        sumThings
        sumCol[row]=sumThings
    }
    sumThings=0
}

for(let col =0; col<matrizNumeros[col].length; col++){
    console.log(`columna pivote ${col}`)
    for(let row =0; row<matrizNumeros.length; row++){
        console.log(`[${col}][${row}]-> ${matrizNumeros[row][col]}`)
        sumThings+=matrizNumeros[row][col]
        sumRow[col]=sumThings
        console.log(sumThings)
    }
    sumThings=0
}


for(let i=0; i<sumCol.length; i++){
    console.log(sumCol[i])
}

for(let i=0; i<sumRow.length; i++){
    console.log(sumRow[i]);
}