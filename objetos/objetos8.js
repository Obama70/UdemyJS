let persona1 = {
    nombre : "juan",
    apellido : "perez",
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    }
}

let persona2 = {
    nombre : "saul",
    apellido: "alvarez",

}

console.log(persona1.nombreCompleto())
console.log(persona1.nombreCompleto.call(persona2));