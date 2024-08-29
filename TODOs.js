class Todo {
    constructor(title, description, points) {
        this.title = title;
        this.description = description;
        this.points = points;
    }

    printTodo() {
        console.log(`Título: ${this.title}`);
        console.log(`Descripción: ${this.description}`);
        console.log(`Puntos para la siguiente TODO: ${this.points}`);
        console.log('--------------------------');
    }
}

const todoList = [];

function addTodo(title, description, points) {
    const newTodo = new Todo(title, description, points);
    todoList.push(newTodo);
}

function printAllTodos() {
    if (todoList.length === 0) {
        console.log("No hay TODOs disponibles.");
    } else {
        console.log("Todas las TODOs:");
        todoList.forEach(todo => todo.printTodo());
    }
}

addTodo("Comprar comestibles", "Leche, Pan, Huevos y Frutas", 5);
addTodo("Completar tarea", "Terminar la tarea de JavaScript para la clase", 10);
addTodo("Hacer ejercicio", "Completar una sesión de ejercicio de 30 minutos", 3);
printAllTodos();
