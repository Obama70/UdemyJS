//aqui defines un objeto 
let persona ={
    //aqui defines los atributos del objeto 
    nombre: 'saul',
    apellido: 'alvarez',
    email: 'salvarez@mail.com',
    edad: 33,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        return this.idioma = lang.toUpperCase();
    },
    //definicion de un metodo usando get 
    get nombreCompleto(){
        return this.nombre +' '+this.apellido
    }
       
}
//metodos get y set 
//los metodos get y set son mejores practicas a la hora de obtener informacion 
//de un objeto
//ahora imprimiremos el metodo get
console.log(persona.nombreCompleto); 
console.log(persona.lang)
//metodo set 
persona.lang = "en";
console.log(persona.lang)
console.log(persona.idioma)
