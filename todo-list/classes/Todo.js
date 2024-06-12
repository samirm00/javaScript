import { editHandler, deleteHandler, saveEditHandler } from '../main.js';

let id = 0;

class Todo {
    constructor(text) {
        this.id = id++;
        this.text = text;
        this.done = false;
    }

    get() {
        return {
            id: this.id,
            text: this.text,
            done: this.done
        };
    }

    render() {
        const li = document.createElement('li');
        li.id = `todo-${this.id}`;

        const text = document.createElement('span');
        text.innerText = this.text;
        text.style.textDecoration = this.done ? 'line-through' : 'none';

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="far fa-edit"></i>';
        editButton.addEventListener('click', () => editHandler(this.id));

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', () => deleteHandler(this.id));

        const toggleButton = document.createElement('button');
        toggleButton.innerHTML = '<i class="fas fa-check-circle"></i>';
        toggleButton.addEventListener('click', () => this.toggle());

        li.append(text, editButton, deleteButton, toggleButton);

        return li;
    }

    toggle() {
        this.done = !this.done;
        const li = document.getElementById(`todo-${this.id}`);
        const text = li.querySelector('span');
        text.style.textDecoration = this.done ? 'line-through' : 'none';
    }

    renderEditInput() {
        const li = document.getElementById(`todo-${this.id}`);
        li.innerHTML = '';

        const input = document.createElement('input');
        input.type = 'text';
        input.value = this.text;

        const saveButton = document.createElement('button');
        saveButton.innerHTML = '<i class="far fa-save"></i>';
        saveButton.addEventListener('click', () =>
            saveEditHandler(this.id, input.value)
        );

        li.append(input, saveButton);
    }
}

export default Todo;
