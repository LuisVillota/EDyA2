class Persona {
    constructor(nombre, horaLlegada) {
        this.nombre = nombre;
        this.horaLlegada = horaLlegada;
    }

    imprimirInfo() {
        console.log(`Nombre: ${this.nombre}, Hora de Llegada: ${this.horaLlegada}`);
    }
}

class ColaDePersonas {
    constructor() {
        this.cola = [];
    }

    encolar(persona) {
        this.cola.push(persona);
    }

    desencolar() {
        if (this.cola.length === 0) {
            console.log("La cola está vacía.");
            return null;
        }
        return this.cola.shift();
    }

    mostrarCola() {
        if (this.cola.length === 0) {
            console.log("La cola está vacía.");
        } else {
            console.log("Cola de Personas:");
            this.cola.forEach(persona => persona.imprimirInfo());
        }
    }
}

const persona1 = new Persona("Jaime Montoya", "8:00 AM");
const persona2 = new Persona("Boyacoman Che", "9:13 AM");
const persona3 = new Persona("Tuki Sanchez", "11:15 AM");

const cola = new ColaDePersonas();
cola.encolar(persona1);
cola.encolar(persona2);
cola.encolar(persona3);

cola.mostrarCola();

console.log("\nDesencolando una persona...");
const personaDesencolada = cola.desencolar();
console.log("Persona desencolada:");
personaDesencolada?.imprimirInfo();

console.log("\nCola después de desencolar:");
cola.mostrarCola();
