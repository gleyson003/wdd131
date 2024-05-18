const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Belém Brazil",
        location: "Belém, Pará, Brazil",
        dedicated: "2022, November, 20",
        area: 4903,
        imageUrl:
        "https://newsroom.churchofjesuschrist.org/media/960x540/58a2bddee2b911eca921eeeeac1e760e71143a4c-min.jpeg"
    },
    {
        templeName: "Fortaleza Brazil",
        location: "Fortaleza, Ceará, Brazil",
        dedicated: "2019, Juny, 02",
        area: 3344,
        imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/UGLIVCMSV4FCGNHC2N3CH3GPNI.jpg"
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, São Paulo, Brazil",
        dedicated: "2002, May, 17",
        area: 4562,
        imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/573PGASBOIZHZLBK3UBFLWAPM4.jpg"
    }
];

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

const container = document.getElementById('temple-cards-container');

temples.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    const name = document.createElement('h3');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.classList.add('area');
    area.textContent = `Area: ${temple.area} sq ft`;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
    });
