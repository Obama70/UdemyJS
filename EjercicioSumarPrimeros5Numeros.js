//ejercicio suma acumulativa con while y dowhile

let a = 1, b=5, sumador = 0;

/*while(a<b){
    console.log(a++)
    sumador+=a;
    console.log(sumador)
}*/

do{
    console.log(`${a} + ${b}`);
    
    sumador+=a;
    console.log(sumador);
    a++;
}while(a<=b);