class Todo {
    currentId = 1;
    constructor(todoData) {
        this.initializeData(todoData);
        this.createDomElements();
        this.render();
    }

    initializeData(todoData) {
        this.data = {
            id: this.currentId++,
            title: todoData.title ?? 'New Todo',
            completed: todoData.completed ?? false
        };
    }

    createDomElements() {
        this.dom = {
            main: document.createElement('div'),
            title: document.createElement('h3'),
            edit: document.createElement('button'),
            delete: document.createElement('button'),
            input: document.createElement('input')
        };

        this.dom.main.classList.add('todo');
        this.dom.edit.innerHTML = '<i class="fas fa-edit"></i>';
        this.dom.delete.innerHTML = '<i class="fas fa-trash"></i>';
        this.dom.input.type = 'text';
        this.dom.input.value = this.data.title;
        this.dom.input.style.display = 'none';

        this.dom.main.append(
            this.dom.title,
            this.dom.edit,
            this.dom.delete,
            this.dom.input
        );

        // Event Listeners
        this.dom.title.addEventListener('click', () => {
            this.update({ completed: !this.data.completed });
        });
        this.dom.edit.addEventListener('click', () => {
            // hide title, edit and delete buttons and show input
            this.dom.title.style.display = 'none';
            this.dom.edit.style.display = 'none';
            this.dom.delete.style.display = 'none';
            this.dom.input.style.display = 'block';

            this.dom.input.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    const text = e.target.value;
                    if (text.trim() === '') {
                        return;
                    } else {
                        this.update({ title: text });
                        this.dom.title.style.display = 'block';
                        this.dom.edit.style.display = 'block';
                        this.dom.delete.style.display = 'block';
                        this.dom.input.style.display = 'none';

                        e.target.value = '';
                    }
                }
            });
        });

        this.dom.delete.addEventListener('click', () => {
            this.destroy();
        });
    }

    render() {
        this.dom.title.innerText = this.data.title;
        this.data.completed
            ? this.dom.title.classList.add('completed')
            : this.dom.title.classList.remove('completed');
    }

    update(updatedData) {
        this.data = {
            ...this.data,
            ...updatedData
        };
        this.render();
    }

    destroy() {
        this.dom.main.remove();
    }
}

export default Todo;
