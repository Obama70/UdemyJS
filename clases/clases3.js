//let persona2 = new Persona("karla", "rangel") cannot acces "Persona" before initialization
class Persona{
    constructor(nombre, apellido){
        //aqui se recomienda que los metodos get y set no tengan el mismo
        //nombre que las propiedades por lo tanto les ponemos un _ al inicio
        //para diferenciarlos 
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get nombre(){
        return this._nombre;
    }
    get nombreCompleto(){
        return this._nombre+" "+this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    //este metodo set lo usaremos para modificar el valor 
    //del atributo de nombre 

}

let persona1 = new Persona("juan", "perez");

//asi obtenemos el nombre con el metodo get
//que creamos arriba el cual returna this._nombre 
console.log(persona1.nombre); 
console.log(persona1.nombreCompleto);

persona1.nombre ='juan carlos' //con esto mandamos llamar set nombre

console.log(persona1.nombre) //con esto mandamos llamar get nombre

//get es obtener y set establecer

//hoisting en clases no existe 
let persona2 = new Persona("karla", "rangel")
console.log(persona2.nombre)
console.log(persona2.nombreCompleto)
persona2.nombre="nanci"
console.log(persona2.nombreCompleto)
