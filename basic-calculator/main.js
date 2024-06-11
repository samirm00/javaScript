import Row from './classes/Row.js';

const container = document.querySelector('.container');
const display = document.querySelector('.display');

const buttonsData = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

let displayValue = '';

buttonsData.forEach((row) => {
    const buttons = row.map((buttonData) => ({
        text: buttonData.toString(),
        classNames: ['btn'],
        id: `btn-${buttonData}`,
        onClick: () => handleButtonClick(buttonData)
    }));

    const rowInstance = new Row({ buttons });
    container.append(rowInstance.render());
});

function handleButtonClick(buttonData) {
    if (buttonData === '=') {
        try {
            display.innerText = eval(displayValue);
            displayValue = display.innerText;
        } catch (error) {
            display.innerText = 'Error';
            displayValue = '';
        }
    } else {
        displayValue += buttonData;
        display.innerText = displayValue;
    }
}
