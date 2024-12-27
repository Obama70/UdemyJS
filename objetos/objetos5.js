let x=10;
console.log(x.lenght);
//funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.cagada=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }
};

let padre = new Persona("juan", "arteaga", "jarteaga@mail.com");
console.log(padre);

let madre = new Persona("sofia", "martinez", "smartinez@mail.com");
console.log(madre);

padre.nombre="saul";
//este cambio solo afectara a padre

console.log(madre)
console.log(padre)
console.log(padre.nombreCompleto())
console.log(padre.cagada)

