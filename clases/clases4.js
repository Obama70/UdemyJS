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
    get apellido(){
        return this._apellido
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    //este metodo set lo usaremos para modificar el valor 
    //del atributo de nombre 

}

//clase hija que heredara de Persona
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento=departamento
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento=departamento
    }
}


let persona1 = new Persona("juan", "perez");

console.log(persona1);

let empleado1 = new Empleado('saul','alvarez','Monitoreo');
console.log(empleado1)

//aqui mandamos llamar el metodo get nombre que se encuentra en la clase hija la cual heredamosa Empleado
console.log(empleado1.nombre)
console.log(empleado1.apellido)

