let x=10;
console.log(x.lenght);


let persona = {
    nombre: 'juan',
    apellido: 'barragan',
    edad: '24',
    mail: 'jbarragan@mail.com',
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();

    },
    get nombreCompleto(){
        return this.nombre+" "+this.apellido;
    }
}

console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang="en";
console.log(persona.lang);
console.log(persona.idioma
    
)

