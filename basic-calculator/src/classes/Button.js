class Button {
    constructor(btnData) {
        this.initializeData(btnData);
        this.createDomElements();
    }

    initializeData(btnData) {
        this.data = {
            id: btnData.id ?? 'btn',
            text: btnData.text ?? 'Button',
            type: btnData.type ?? 'button',
            classes: btnData.classes ?? [],
            onClick: btnData.onClick ?? (() => {})
        };
    }

    createDomElements() {
        this.dom = {
            main: document.createElement('button')
        };
    }

    render() {
        this.dom.main.id = this.data.id;
        this.dom.main.innerText = this.data.text;
        this.dom.main.type = this.data.type;
        this.data.classes.forEach((className) =>
            this.dom.main.classList.add(className)
        );
        this.dom.main.addEventListener('click', this.data.onClick);
    }

    destroy() {
        this.dom.main.remove();
    }
}

export default Button;
