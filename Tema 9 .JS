class Persona{
    constructor(edad, nombre, telefono){
        this.edad= edad;
        this.nombre= nombre;
        this.telefono= telefono;
    }
}

class cliente extends Persona{
    constructor(edad, nombre, telefono,credito){
        super(edad, nombre, telefono)
        this.credito = credito;
    }
}

class trabajador extends Persona{
    constructor (edad, nombre, telefono, salario){
        super(edad, nombre, telefono)
        this.salario = salario;
        
    }
}

const claseCliente= new cliente(21, "agustin", 123456, 100);
const claseTrabajador= new trabajador(30, "Carlo", 456123, 900)
console.log(claseCliente);
console.log(claseTrabajador);
