let inputTag = document.querySelector('#favchap');
let buttonTag = document.querySelector('button');
let listTag = document.querySelector('#list');
let liTag;

const deleteButtonTag = document.createElement('button');
deleteButtonTag.textContent = 'X';
deleteButtonTag.style.color = 'red';

buttonTag.addEventListener('click', function() {
    if (inputTag.value.trim() === '') {
        alert('Please enter a chapter.');
        inputTag.focus();
        return; 
    }
    
    liTag = document.createElement('li');
    liTag.textContent  = inputTag.value;

    liTag.appendChild(deleteButtonTag);
    listTag.appendChild(liTag);

    inputTag.value = '';
    inputTag.focus();
});

deleteButtonTag.addEventListener('click', function() {
    listTag.removeChild(liTag);
    inputTag.focus();
});