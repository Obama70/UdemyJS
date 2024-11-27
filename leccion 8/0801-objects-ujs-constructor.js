//constructor de objetos 
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido
    }
}

let señor = new Persona("saul", "alvarez", "salvarez@mail.com");
console.log(señor.nombreCompleto())

let señora = new Persona("salma", "hayek", "shayek@mail.com");
console.log(señora)

señor.nombre="javier";
console.log(señor)