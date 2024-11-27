function Persona(nombre, apellido, email, tel){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = tel;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido
    }
}

//prototype es una propiedad que modifica globalmente los atributos de los objetos construidos 
//si se quiere modificar un valor previamente asignado con prototype se hace directamente en el objeto construido 

Persona.prototype.tel="11223344"

let señor = new Persona("saul", "alvarez", "salvarez@mail.com");
console.log(señor.nombreCompleto())
console.log(señor.tel)
señor.tel="55889977"
console.log(señor.tel)

let señora = new Persona("salma", "hayek", "shayek@mail.com");
console.log(señora)
console.log(señora.tel)
señora.tel="99778844"
console.log(señora.tel)