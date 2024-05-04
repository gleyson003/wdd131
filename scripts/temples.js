document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let lastModification = document.lastModified;
    
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = 'Last modification: ' + lastModification;
});

//Humbuguer menu event
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});