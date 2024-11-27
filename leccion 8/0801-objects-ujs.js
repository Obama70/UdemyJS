let x= 10;
console.log(x.length);

//aqui defines un objeto 
let persona ={
    //aqui defines los atributos del objeto 
    nombre: 'saul',
    apellido: 'alvarez',
    email: 'salvarez@mail.com',
    edad: 33,
    //aqui defines un metodo de un objeto 
    nombreCompleto: function(){
        return this.nombre +' '+this.apellido
    }

}

console.log(persona.nombreCompleto())
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona);

//aqui metiste atributos al objeto persona 

//creacion de un objeto con sintaxis diferente en JS

let persona2 = new Object();
persona2.name = "sebastian";
persona2.lastName = "alcantar"
persona2.tel = 8714711366;
persona2.dir = "alcazar de san juan 417";

console.log(persona2.name)
//otra forma de accedere a los atributos de un objeto es tratandolo como un arreglo usando []

console.log(persona2["name"]);
console.log(persona2["tel"])
//y el acceso se declara "entre comillas" 

//entonces como tambien podemos acceder a los atributos de un objeto tratandolo como un arreglo, 
//podremos entonces acceder a ellos con un ciclo for tal cual como un arreglo

//solo que en este caso el ciclo pasa a llamarse FOR "IN"

//for in
for(atributos in persona){
    console.log(atributos)
    console.log(persona[atributos])
}

//los objetos en js tambien son dinamicos 
//es decir se pueden modificar al vuelo por ejemplo 
//vamos a añadir un nuevo atributo a persona 1
persona.tel ="5557281068"

console.log(persona)
//recordemos que persona 1 no tenia telefono como atributo 

//tambien podemos modificar ese atributo añadido 

persona.tel="8713355383"

console.log(persona["tel"])
//tambien podemos eliminar un atributo en un objeto 
//usando delete 

delete persona.tel;

console.log(persona)
//como vemos ya no aparece telefono 

//formas de imprimir un objeto 

// concatenar cada valor de cada argumento 
console.log(persona.nombre +", "+persona.apellido)

//con for in 
for(atributos in persona){
    console.log(atributos)
    console.log(persona[atributos])
}

//usando object.values

let personaArray = Object.values(persona);
console.log(personaArray)

// con json y stringify 
let personaString = JSON.stringify(persona);
console.log(personaString)

//esto es importante por que a la hora de mandarlos a imprimir en un navegador solo imprimira object
//entonces no imprimira sus atributos 
//para eso son estos diferentes maneras
