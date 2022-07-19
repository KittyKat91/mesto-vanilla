

let submitButton = document.querySelector ('.submit__button')
let closeButton = document.querySelector ('.close__button')
let editPopup = document.querySelector ('.profile__edit-button')
let popup = document.querySelector ('.pop-up');
let popupName = document.querySelector('.popup__name');
let popupBio = document.querySelector('.popup__bio');
let nameEdited
let bioEdited

console.log(popup.classList);

function openPopup(popup) {
    popup.classList.add ('.pop-up__opened');
} 

editPopup.addEventListener('click', openPopup);

function closePopup(popup) {
    popup.classList.remove ('.pop-up__opened');
} 
 
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameEdited = document.querySelector('.popup__name').value;
    bioEdited = document.querySelector('.popup__bio').value;
    popupName.textContent = nameEdited;
    popupBio.textContent = bioEdited; 
}

popup.addEventListener('submit', formSubmitHandler);





