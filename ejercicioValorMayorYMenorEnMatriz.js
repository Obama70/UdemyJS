//valor mayor y menor en una matriz
let numerosMatriz=[
    [28,99],
    [9 , 6],
    [99, 5],
    [1 , 2]
];

let may=0, men=0;

for(let row =0; row<numerosMatriz.length; row++){
    for(let col=0; col<numerosMatriz[row].length; col++){
        console.log(numerosMatriz[row][col]);
        if(numerosMatriz[row][col]>may){
            may=numerosMatriz[row][col]
            men=may;
        }
    }
}
for(let row =0; row<numerosMatriz.length; row++){
    for(let col=0; col<numerosMatriz[row].length; col++){
        console.log(numerosMatriz[row][col]);
        if(numerosMatriz[row][col]<men){
            men=numerosMatriz[row][col]
            
        }
    }
}
console.log(may)
console.log(men)