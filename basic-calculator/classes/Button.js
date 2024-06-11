class Button {
    constructor(btnData) {
        this.initializeData(btnData);
        this.createDomElement();
    }

    initializeData(btnData) {
        this.data = {
            text: btnData.text || 'text',
            type: btnData.type || 'button',
            id: btnData.id || '',
            classNames: btnData.classNames || [],
            onClick: btnData.onClick || (() => {})
        };
    }

    createDomElement() {
        this.dom = {
            main: document.createElement('button')
        };
    }

    render() {
        const { text, type, id, classNames, onClick } = this.data;
        const { main } = this.dom;

        main.innerText = text;
        main.type = type;
        if (id) main.id = id;
        if (classNames.length > 0) main.classList.add(...classNames);
        main.addEventListener('click', onClick);

        return main;
    }

    destroy() {
        this.dom.main.remove();
    }
}

export default Button;
