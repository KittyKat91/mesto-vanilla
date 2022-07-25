


// const submitButton = document.querySelector ('.pop-up__button-submit');

// const editPopup = document.querySelector ('.profile__edit-button');
// const popup = document.getElementsByClassName ('pop-up');
// const popupOpened = document.getElementsByClassName ('pop-up__opened');
// let popupName = document.querySelector('.pop-up__field-name');
// let popupBio = document.querySelector('.pop-up__field-bio');
// let nameEdited;
// let bioEdited;



// function openPopup(popup) {
//     popup[0].classList.toggle('pop-up__opened');
//     }

// editPopup.addEventListener('click', () => openPopup(popup));





let closeButton = document.querySelector ('.button__close');
let closePopupButton = document.querySelector ('.pop-up__button-close');
let editPopup = document.querySelector ('.profile__edit-button');

const popup = document.getElementsByClassName ('pop-up');
let popupName = document.querySelector('.pop-up__field-name');
let popupBio = document.querySelector('.pop-up__field-bio');
let editedName;
let editedBio;

editPopup.addEventListener('click', () => openPopup(popup[0]));

function openPopup(popup) {
    popup.classList.toggle('pop-up__opened');
    document.querySelector('.pop-up__field-name').value = document.querySelector('.profile__name').textContent;
    document.querySelector('.pop-up__field-bio').value = document.querySelector('.profile__bio').textContent;
    
}  

function closePopup() {
    document.getElementsByClassName ('pop-up')[0].classList.toggle('pop-up__opened');
}

let formElement = document.getElementsByClassName('pop-up__submitform');
console.log(formElement);

function formSubmitHandler(evt) {
    evt.preventDefault();
    editedName = document.querySelector('.pop-up__field-name').value;
    editedBio = document.querySelector('.pop-up__field-bio').value;
    document.querySelector('.profile__name').textContent = editedName;
    document.querySelector('.profile__bio').textContent = editedBio;
}

formElement.addEventListener('submit', () => formSubmitHandler(evt));