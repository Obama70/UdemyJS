//sumar la diagonal de una matriz 

let matrizNumeros = [[1,11,2],[5,2,33],[99,4,8]];
let sumaMatriz = 0;

for(let row = 0; row<matrizNumeros.length; row++){
    for(let col = 0; col<matrizNumeros[row].length; col++){
        console.log(`[${row}][${col}] -> ${matrizNumeros[row][col]}`)
        if(row==col){
            sumaMatriz+=matrizNumeros[row][col];
            console.log(sumaMatriz)
        }
    }
}
console.log(`la suma de la diagonal de la matriz es de ${sumaMatriz}`);
 