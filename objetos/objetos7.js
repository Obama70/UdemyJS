function Persona(nombre, apellido, email){
    this.cagada=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }
};

Persona.prototype.tel = "44556633";

let padre = new Persona("juan", "arteaga", "jarteaga@mail.com");
console.log(padre.tel);
padre.tel="77889944"
console.log(padre.tel)


let madre = new Persona("sofia", "martinez", "smartinez@mail.com");
console.log(madre.tel);

