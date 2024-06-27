// DOM elements
const input = document.getElementById('temperature-input');
const select = document.getElementById('unit-select');
const button = document.getElementById('convert-btn');
const output = document.getElementById('output');

// Event listeners
button.addEventListener('click', (e) => {
    e.preventDefault();
    convertHandler();
});

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        convertHandler();
    }
});

function convertHandler() {
    const temperature = parseFloat(input.value);
    const unit = select.value;

    if (isNaN(temperature)) {
        output.innerText = 'Please enter a valid number';
        return;
    }

    const result = convertTemperature(temperature, unit);
    output.innerText = `${result.toFixed(2)} ${unit === 'celsius' ? 'C' : 'F'}`;
}

function convertTemperature(temperature, unit) {
    if (unit === 'Celsius') {
        return (temperature * 9) / 5 + 32;
    } else {
        return ((temperature - 32) * 5) / 9;
    }
}
