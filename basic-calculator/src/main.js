import ButtonRow from './classes/ButtonRow.js';

// DOM elements
const root = document.getElementById('root');
const display = document.getElementById('display');

const btnData = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+']
];

// Format the button data
const btnRowsData = btnData.map((row, i) => ({
    id: `row-${i}`,
    buttons: row.map((btn) => ({
        id: `btn-${btn}`,
        text: btn,
        classes: ['btn'],
        onClick: () => handleClick(btn)
    }))
}));

// Create and render the button rows
btnRowsData.forEach((row) => {
    const buttonRow = new ButtonRow(row);
    buttonRow.render();
    root.append(buttonRow.dom.main);
});

let value = '';
function handleClick(btn) {
    if (btn === 'C') {
        value = '';
        display.innerText = value;
    } else if (btn === '=') {
        try {
            const result = eval(value);
            display.innerText = result;
        } catch (error) {
            display.innerText = 'Error';
        }
    } else {
        value += btn;
        display.innerText = value;
    }
}
