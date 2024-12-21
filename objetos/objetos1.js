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

persona.nombre;
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.mail);
//////importante () cuando llamamos un metodo de un objeto
console.log(persona.nombreCompleto())

let persona2 = new Object();

persona2.name = "carlos";
persona2.tel=1122334455;
persona2.dir="calle monjas";

console.log(persona2.name);
console.log(persona2.tel);
console.log(persona2.dir);