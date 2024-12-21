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