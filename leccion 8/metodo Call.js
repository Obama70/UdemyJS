//metodo call

let persona1={
    nombre: "sebastian",
    apellido: "alcantar",
    nombreCompleto: function(titulo, tel){
        return titulo+": "+this.nombre+" "+this.apellido+", "+tel
    }
}

let persona2={
    nombre: "carlos",
    apellido: "alcantar"
}

//uso del call
//para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto("estudiante", "44332211"))

console.log(persona1.nombreCompleto.call(persona2, "ing", "8714711366"));
