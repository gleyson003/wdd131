document.addEventListener('DOMContentLoaded', participantsNumber);
document.addEventListener('DOMContentLoaded', renderOptionsOfTypeDonation);
document.addEventListener('DOMContentLoaded', renderOptionsOfPositions);

//Local Storage function
function participantsNumber() {
  const registrationCount = localStorage.getItem('registrationCount') || 0;
  document.getElementById('registrationCount').textContent = registrationCount
}

//Donation type array
const donationTypeArray = {
  '1': 'Clothes',
  '2': 'Perishable food',
  '3': 'Non-perishable food'
};

//Positions array
const positions = {
  '1': 'Setter',
  '2': 'Opposite',
  '3': 'Outside Hitter',
  '4': 'Wing Spikers',
  '5': 'Middle Blockers or Middle Hitters',
  '6': 'Libero'
};

//Options from de select donation type created here
function renderOptionsOfTypeDonation() {
  const selectTag = document.getElementById('selectTypeOfDonation'); 

  Object.keys(donationTypeArray).forEach(key => {
    const donationType = donationTypeArray[key];
    
    const optionTag = document.createElement('option');
    optionTag.classList.add('selectDonation');
    optionTag.value = key;
    optionTag.textContent = donationType.charAt(0).toUpperCase() + donationType.slice(1); 

    selectTag.appendChild(optionTag);
  });
}

//Options from de select donation type created here
function renderOptionsOfPositions() {
  const selectTag = document.getElementById('position'); 

  Object.keys(positions).forEach(key => {
    const position = positions[key];
    
    const optionTag = document.createElement('option');
    optionTag.classList.add('selectPosition');
    optionTag.value = key;
    optionTag.textContent = position.charAt(0).toUpperCase() + position.slice(1); 

    selectTag.appendChild(optionTag);
  });
}