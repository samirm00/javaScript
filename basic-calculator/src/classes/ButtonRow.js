import Button from './Button.js';

class ButtonRow {
    constructor(btnRowData) {
        this.initializeData(btnRowData);
        this.createDomElements();
    }

    initializeData(btnRowData) {
        this.data = {
            id: btnRowData.id ?? 'btn-row',
            buttons: btnRowData.buttons ?? []
        };
    }

    createDomElements() {
        this.dom = {
            main: document.createElement('div')
        };
    }

    render() {
        this.dom.main.id = this.data.id;
        this.data.buttons.forEach((btnData) => {
            const button = new Button(btnData);
            button.render();
            this.dom.main.append(button.dom.main);
        });
    }

    destroy() {
        this.dom.main.remove();
    }
}

export default ButtonRow;
