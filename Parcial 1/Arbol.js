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

    calcularAltura() {
        if (this.hijos.length === 0) {
            return 0; 
        }
        let alturasHijos = this.hijos.map(hijo => hijo.calcularAltura());
        return Math.max(...alturasHijos) + 1;
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

console.log("Altura del árbol:", abuelo.calcularAltura());
