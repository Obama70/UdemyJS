//imprimir matriz al reves

let numerosMatriz=[
    [28,99],
    [9, 6 ],
    [99,5 ],
    [1,2  ]
];


console.log(`matriz impresa correctamente`)
for(let row=0; row<numerosMatriz.length; row++){
    for(let col=0; col<numerosMatriz[row].length; col++){
        console.log(numerosMatriz[row][col]);
    }
}
console.log(`matriz impresa al revez`)

for(let row=numerosMatriz.length-1; row>=0; row--){
    for(let col=numerosMatriz[row].length-1; col>=0; col--){
        console.log(numerosMatriz[row][col]);
    }
}

