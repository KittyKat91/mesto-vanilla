
const popupProfileName = document.querySelector('.pop-up__field-name');
const popupProfileBio = document.querySelector('.pop-up__field-bio');
const editedProfileName = document.querySelector('.profile__name');
const editedProfileBio = document.querySelector('.profile__bio');


const popup = document.querySelector ('.pop-up');
const editPopup = document.querySelector ('.profile__edit-button');
editPopup.addEventListener('click', () => openPopup());

function openPopup() {
    popup.classList.add('pop-up_opened');
    popupProfileName.value = editedProfileName.textContent;
    popupProfileBio.value = editedProfileBio.textContent;
    
}

const closeButton = document.querySelector ('.button__close');
const closePopupButton = document.querySelector ('.pop-up__button-close');
closePopupButton.addEventListener('click', () => closePopup());

function closePopup() {
    popup.classList.remove('pop-up_opened');
}


const formElement = document.querySelector('.pop-up__submitform');

function formSubmitHandler(evt) {
    evt.preventDefault();
    editedProfileName.textContent = popupProfileName.value;
    editedProfileBio.textContent = popupProfileBio.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
