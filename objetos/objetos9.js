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

//uso de call para usar el metodo 
//persona1.nombreCompleto con los datos de persona2

console.log (persona1.nombreCompleto());

console.log (persona1.nombreCompleto.call(persona2));

console.log (persona1.nombreCompleto("ing","88774411"));

console.log(persona1.nombreCompleto.call(persona2, "ing", "88774455",))
//recuerda siempre que para usar el metodo de otro objeto en un objeto en el que estes trabajando 
//VAS A USAR CALL
