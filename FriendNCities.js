class Ciudad {
    constructor(nombre) {
        this.nombre = nombre;
        this.personas = []; 
    }

    añadirPersona(persona) {
        this.personas.push(persona);
    }

    imprimirPersonas() {
        if (this.personas.length === 0) {
            console.log(`No hay personas en la ciudad ${this.nombre}.`);
        } else {
            console.log(`Personas que viven en la ciudad ${this.nombre}:`);
            this.personas.forEach(persona => persona.imprimirInfo());
        }
    }
}

class Persona {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    imprimirInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const ciudad1 = new Ciudad("Madrid");
const ciudad2 = new Ciudad("Barcelona");

const persona1 = new Persona("Juan Pérez", 30, ciudad1);
const persona2 = new Persona("Ana Gómez", 25, ciudad1);
const persona3 = new Persona("Carlos Ruiz", 40, ciudad2);

ciudad1.añadirPersona(persona1);
ciudad1.añadirPersona(persona2);
ciudad2.añadirPersona(persona3);

function imprimirPersonasEnCiudad(ciudad) {
    ciudad.imprimirPersonas();
}

console.log("Lista de personas en Madrid:");
imprimirPersonasEnCiudad(ciudad1);
console.log("\nLista de personas en Barcelona:");
imprimirPersonasEnCiudad(ciudad2);
