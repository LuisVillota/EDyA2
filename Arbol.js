class Persona {
    constructor(nombreCompleto, fechaNacimiento) {
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.hijos = []; 
    }

    añadirHijo(hijo) {
        this.hijos.push(hijo);
    }

    imprimirInfo() {
        console.log(`Nombre: ${this.nombreCompleto}`);
        console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
    }
}

const abuelo = new Persona("Juan Miguel", "1940-05-15");
const abuela = new Persona("Marco Antonio", "1942-07-22");

const padre = new Persona("Juanita Popo", "1965-03-11");
const madre = new Persona("Tuki Sanchez", "1967-09-30");

const hijo1 = new Persona("Jaime Montoya", "1990-02-01");
const hijo2 = new Persona("Boyacoman Che", "1992-04-12");

abuelo.añadirHijo(padre);
abuela.añadirHijo(padre);

padre.añadirHijo(hijo1);
padre.añadirHijo(hijo2);

madre.añadirHijo(hijo1);
madre.añadirHijo(hijo2);

function recorrerPreOrden(persona) {
    if (!persona) return;
    persona.imprimirInfo();
    persona.hijos.forEach(hijo => recorrerPreOrden(hijo));
}
function recorrerPostOrden(persona) {
    if (!persona) return;
    persona.hijos.forEach(hijo => recorrerPostOrden(hijo));
    persona.imprimirInfo();
}
function recorrerInOrden(persona) {
    if (!persona || persona.hijos.length === 0) {
        persona?.imprimirInfo();
        return;
    }
    if (persona.hijos.length > 0) {
        recorrerInOrden(persona.hijos[0]);
    }
    persona.imprimirInfo();
    for (let i = 1; i < persona.hijos.length; i++) {
        recorrerInOrden(persona.hijos[i]);
    }
}

console.log("Recorrido Pre-Orden:");
recorrerPreOrden(abuelo);
console.log("\nRecorrido Post-Orden:");
recorrerPostOrden(abuelo);
console.log("\nRecorrido In-Orden:");
recorrerInOrden(abuelo);
