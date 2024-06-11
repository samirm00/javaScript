const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convertBtn');
const resultDisplay = document.getElementById('result');

const convertTemperature = () => {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDisplay.innerText = 'Please enter a valid temperature.';
        return;
    }

    let convertedTemperature;
    let resultText;

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9) / 5 + 32;
        resultText = `${temperature}°C  =  ${convertedTemperature.toFixed(4)}°F`;
    } else {
        convertedTemperature = ((temperature - 32) * 5) / 9;
        resultText = `${temperature}°F  =  ${convertedTemperature.toFixed(4)}°C`;
    }

    resultDisplay.innerText = resultText;
};

convertButton.addEventListener('click', (e) => {
    e.preventDefault();
    convertTemperature();
});
