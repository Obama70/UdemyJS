let persona1 ={
    nombre: "juan",
    apellido: "perez",
    nombreCompleto : function(titulo, tel){
        return titulo+": "+this.nombre+" "+this.apellido+", "+tel;
    }
}

let persona2 = {
    nombre: "saul",
    apellido: "alvarez"

}

//uso de APPLY para usar el metodo 
//persona1.nombreCompleto con los datos de persona2
console.log (persona1.nombreCompleto("ingeniero", "889966332"));

let array = ["ingeniero", "87112365"]
console.log (persona1.nombreCompleto.apply(persona2, array));

//recuerda siempre que para usar el metodo de otro objeto en un objeto en el que estes trabajando 
//VAS A USAR CALL


