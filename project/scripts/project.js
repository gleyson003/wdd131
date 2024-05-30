/*---Inatilize code---*/
document.addEventListener('DOMContentLoaded', footerModificationAndCopywrite);
document.addEventListener('DOMContentLoaded', hambuguerMenu);
document.addEventListener('DOMContentLoaded', setTitleBasedOnURL);

//Title array
const titles = {
  'home-page.html': 'Solidarity Volleyball Championship',
  'championship.html': 'Championship and Donations',
  'form-registration.html': 'Form Registration'
};

//Title based on URL
function setTitleBasedOnURL() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1);
  const newTitle = titles[page];
  document.getElementById('title').textContent = newTitle;
}

//Humbuguer Menu function
function hambuguerMenu() {
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('nav');

  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
}

//Initialize page function
function footerModificationAndCopywrite() {
  let currentYear = new Date().getFullYear();
  let lastModification = document.lastModified;

  document.getElementById('currentyear').textContent = currentYear;
  document.getElementById('lastModified').textContent = 'Last modification: ' + lastModification;
}