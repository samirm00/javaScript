import Button from './Button.js';

class Row {
    constructor(rowData) {
        this.initializeData(rowData);
        this.createDomElement();
    }

    initializeData(rowData) {
        this.data = {
            buttons: rowData.buttons || []
        };
    }

    createDomElement() {
        this.dom = {
            main: document.createElement('div')
        };
    }

    render() {
        const { buttons } = this.data;
        const { main } = this.dom;

        main.classList.add('row');
        buttons.forEach((buttonData) => {
            const button = new Button({
                text: buttonData.text,
                type: buttonData.type,
                id: buttonData.id,
                classNames: buttonData.classNames,
                onClick: buttonData.onClick
            });

            main.append(button.render());
        });

        return main;
    }

    destroy() {
        this.dom.main.remove();
    }
}

export default Row;
