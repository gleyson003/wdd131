document.addEventListener('DOMContentLoaded', participantsNumber);

//Local Storage function
function participantsNumber() {
    const registrationCount = localStorage.getItem('registrationCount') || 0;
    document.getElementById('registrationCount').textContent = registrationCount
  }