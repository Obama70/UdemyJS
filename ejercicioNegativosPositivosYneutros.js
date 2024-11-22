//conteo positivos, negativos y neutros en un arreglo

let arrayNumeros=[11,2,0,5,-8,-5,4,1]
let arrayPos=[];
let arrayNeg=[];
let arrayNeu=[];

for(let i =0; i<arrayNumeros.length; i++){
    if(arrayNumeros[i]==0){
        arrayNeu[i]=arrayNumeros[i];
    }
    else if(arrayNumeros[i]>0){
        arrayPos[i]=arrayNumeros[i];
    }
    else if(arrayNumeros[i]<0){
        arrayNeg[i]=arrayNumeros[i];
    }
    
}
console.log(`hay ${arrayPos.length} positivos, ${arrayNeg.length} negativos y ${arrayNeu.length} neutros`);
console.log(arrayNeu)