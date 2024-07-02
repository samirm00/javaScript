import Todos from './classes/Todos.js';

// Dom Elements
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event Listeners
todoInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const text = e.target.value;
        const todo = Todos.add({ title: text });
        todoList.append(todo.dom.main);

        e.target.value = '';
    }
});
