//metodo aply
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

//uso del apply
//para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto("estudiante", "44332211"))

let arreglo=["ing","8713355383"]
console.log(persona1.nombreCompleto.apply(persona2,arreglo));