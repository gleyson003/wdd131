//Array of products
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: "4.7"
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: "3.5"
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: "3.9"
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: "5.0"
    }
];

//Global Variables
const selectTag = document.querySelector('select');

//Options from de select created here
function rederOptions() {
    products.forEach(product => {
        const optionTag = document.createElement('option');
        optionTag.classList.add('selectOptions');
        optionTag.name = product.id;
        optionTag.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); 

        selectTag.appendChild(optionTag);
    });
}

//Last modification and year on footer
document.addEventListener('DOMContentLoaded', function() {
  let currentYear = new Date().getFullYear();
  let lastModification = document.lastModified;
  
  document.getElementById('currentyear').textContent = currentYear;
  document.getElementById('lastModified').textContent = 'Last modification: ' + lastModification;

  //Render options from select
  rederOptions();

  //Submit total
  const reviewCount = localStorage.getItem('reviewCount') || 0;
  document.getElementById('reviewCount').textContent = reviewCount
});