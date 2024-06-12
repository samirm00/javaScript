class Todos {
    constructor() {
        this.todos = [];
    }

    getAll() {
        return this.todos;
    }

    getById(id) {
        return this.todos.find((todo) => todo.id === id);
    }

    add(todo) {
        this.todos.push(todo);
    }

    update(id, newTodo) {
        const todo = this.getById(id);
        if (todo) {
            todo.text = newTodo.text;
            todo.done = newTodo.done;
        }
    }

    delete(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    toggle(id) {
        const todo = this.getById(id);
        if (todo) {
            todo.done = !todo.done;
        }
    }
}

export default Todos;
