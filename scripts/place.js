document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let lastModification = document.lastModified;

    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = 'Last modification: ' + lastModification;

    let temperature = 30;
    let windSpeed = 6;

    let windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById('temperature').textContent = temperature + ' °C';
    document.getElementById('conditions').textContent = 'Partly Sunny';
    document.getElementById('wind').textContent = windSpeed + ' km/h';

    if (typeof windChill === 'string') {
        document.getElementById('windChill').textContent = windChill;
    } else {
        document.getElementById('windChill').textContent = windChill.celsius.toFixed(2) + ' °C, ' + windChill.fahrenheit.toFixed(2) + ' °F';
    }
});

function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        let windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        let windChillFahrenheit = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return { celsius: windChillCelsius, fahrenheit: windChillFahrenheit };
    } else {
        return "N/A";
    }
}