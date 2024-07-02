import Todo from './Todo.js';

class Todos {
    static todos = [];

    static add(todoData) {
        const todo = new Todo(todoData);
        Todos.todos.push(todo);
        return todo;
    }

    static update(id, updatedData) {
        const todo = Todos.todos.find((todo) => todo.data.id === id);
        if (!todo) {
            return;
        }
        todo.update(updatedData);
    }

    static remove(id) {
        const todoIndex = Todos.todos.findIndex((todo) => todo.data.id === id);
        if (todoIndex === -1) {
            return;
        }
        todos[todoIndex].destroy();
        todos.splice(todoIndex, 1);
    }
}

export default Todos;
