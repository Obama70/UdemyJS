//no es posible crear objetos antes de declarar la clase 
// no se aplica el concepto de hoisting 
//let persona3 = new Persona("jose", "aluvion")
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;

    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

}

let persona1= new  Persona("juan", "perez");
persona1.nombre= 'juan carlos';//set nombre juan carlos
console.log(persona1.nombre); 


