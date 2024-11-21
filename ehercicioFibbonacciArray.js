//serie fibbonacci array 


let serieFibo=[];
serieFibo[0]=1;
serieFibo[1]=1;

let bgn = 0, lst =10;

for(let i = 2; i<=lst; i++){
    serieFibo[i] = serieFibo[i-1] + serieFibo[i-2]
    console.log(serieFibo[i])
}

