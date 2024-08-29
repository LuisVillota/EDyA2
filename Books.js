class Libro {
    constructor(nombre, isbn, autor, editorial) {
        this.nombre = nombre;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
    }

    imprimirInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editorial: ${this.editorial}`);
        console.log('--------------------------');
    }
}

class PilaDeLibros {
    constructor() {
        this.pila = [];
    }

    apilar(libro) {
        this.pila.push(libro);
    }

    desapilar() {
        if (this.pila.length === 0) {
            console.log("La pila está vacía.");
            return null;
        }
        return this.pila.pop();
    }

    mostrarPila() {
        if (this.pila.length === 0) {
            console.log("La pila está vacía.");
        } else {
            console.log("Pila de Libros:");
            this.pila.forEach(libro => libro.imprimirInfo());
        }
    }
}

const libro1 = new Libro("Cien años de soledad", "978-3-16-148410-0", "Gabriel García Márquez", "Editorial Sudamericana");
const libro2 = new Libro("Don Quijote de la Mancha", "978-84-06-40229-6", "Miguel de Cervantes", "Editorial Espasa");
const libro3 = new Libro("La sombra del viento", "978-84-08-06673-7", "Carlos Ruiz Zafón", "Editorial Planeta");

const pila = new PilaDeLibros();
pila.apilar(libro1);
pila.apilar(libro2);
pila.apilar(libro3);

console.log("Contenido de la pila:");
pila.mostrarPila();

console.log("\nDesapilando un libro...");
const libroDesapilado = pila.desapilar();
console.log("Libro desapilado:");
libroDesapilado?.imprimirInfo();

console.log("\nContenido de la pila después de desapilar:");
pila.mostrarPila();
