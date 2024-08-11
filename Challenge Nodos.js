class Node {
    constructor(title, description, points) {
        this.title = title;
        this.description = description;
        this.points = points;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(title, description, points) {
        const newNode = new Node(title, description, points);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(`Title: ${current.title}, Description: ${current.description}, Points: ${current.points}`);
            current = current.next;
        }
    }
}
// Crear la lista enlazada
const todoList = new LinkedList();

// Agregar algunos TODOs
todoList.append("Task 1", "Description of Task 1", 3);
todoList.append("Task 2", "Description of Task 2", 5);
todoList.append("Task 3", "Description of Task 3", 2);

// Imprimir todos los TODOs
todoList.printList();
