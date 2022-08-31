 class Persona{
    constructor(edad,nombre, telefono){
   this.edad = edad;
  this.nombre = nombre; 
  this.telefono = telefono;
    }
    get getEdad(){
        return this.edad; 
    }
    get getNombre(){
        return this.nombre; 
    }
    get getTelefono(){
        return this.telefono; 
    }
    set setEdad(edad){
         this.edad= Edad; 
    }
    set setNombre(nombre){
         this.nombre= Nombre; 
    }
    set setTelefono(telefono){
         this.telefono = Telefono; 
    }

 }

  const resultadoDePersona = new Persona('agustin', 20, 123456);
 
    console.log (resultadoDePersona);
