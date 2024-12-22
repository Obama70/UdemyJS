let x=10;
console.log(x.lenght);


let persona = {
    nombre: 'juan',
    apellido: 'barragan',
    edad: '24',
    mail: 'jbarragan@mail.com',
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    }
}


//for in 

for(nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
};

persona.tel="1122334455";

console.log(persona.tel);

//borremos una propiedad del objeto 

delete persona.tel;

console.log(persona.tel)

//formas de imprimir un object
//concatenar cada valor de cada propidedad

console.log(persona.nombre+", "+persona.apellido+", "+persona.edad+", "+persona.mail);

//otra forma es iterar cada una de las propiedades con for in 
for(nombreDPropiedad in persona){
    console.log(persona[nombreDPropiedad])
}

//muy interesante metodo es con un array literal que tome los valores de las propiedades 
//con object.values 

let personaArray = Object.values(persona)

console.log(personaArray)

//otro metodo muy interezante es convertirlo todo a strings

let personaString = JSON.stringify(persona);

console.log(personaString)