import Todos from './classes/Todos.js';
import Todo from './classes/Todo.js';

const textInput = document.getElementById('input');
const addButton = document.getElementById('btn');
const list = document.getElementById('list');
const error = document.querySelector('.error');

const todos = new Todos();

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleAddTodo();
});
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleAddTodo();
    } else {
        error.innerText = '';
    }
});

function handleAddTodo() {
    const textValue = textInput.value.trim();
    if (textValue) {
        const todo = new Todo(textValue);
        todos.add(todo);
        list.appendChild(todo.render());
        textInput.value = '';
        error.innerText = '';
    } else {
        error.innerText = 'Please enter a todo';
    }
}

export const editHandler = (id) => {
    const todo = todos.getById(id);
    if (todo) {
        todo.renderEditInput();
    }
};

export const saveEditHandler = (id, newText) => {
    if (newText.trim() !== '') {
        const todo = todos.getById(id);
        todos.update(id, { text: newText, done: todo.done });
        const li = document.getElementById(`todo-${id}`);
        li.innerHTML = ''; // Clear existing elements
        li.appendChild(todo.render().firstChild);
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="far fa-edit"></i>';
        editButton.addEventListener('click', () => editHandler(id));
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', () => deleteHandler(id));
        const toggleButton = document.createElement('button');
        toggleButton.innerHTML = '<i class="fas fa-check-circle"></i>';
        toggleButton.addEventListener('click', () => todo.toggle());
        li.append(editButton, deleteButton, toggleButton);
    }
};

export const deleteHandler = (id) => {
    const li = document.getElementById(`todo-${id}`);
    if (li) {
        li.remove();
        todos.delete(id);
    }
};
