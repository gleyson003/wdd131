document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let lastModification = document.lastModified;
    
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = 'Last modification: ' + lastModification;

    let temperature = '30 °C'
    let conditions = 'Parly Sunny'
    let wind = '6 km/h'
    let windChill = '33 °C'

    document.getElementById('temperature').textContent = temperature;
    document.getElementById('conditions').textContent = conditions;
    document.getElementById('wind').textContent = wind;
    document.getElementById('windChill').textContent = windChill;
});