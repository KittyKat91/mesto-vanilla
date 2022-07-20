

let submitButton = document.querySelector ('.button__submit')
let closeButton = document.querySelector ('.button__close')
let editPopup = document.querySelector ('.profile__edit-button')
let popup = document.querySelector ('.pop-up');
let popupName = document.querySelector('.pop-up__field-name');
let popupBio = document.querySelector('.pop-up__field-bio');
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
    nameEdited = document.querySelector('.pop-up__field-name').value;
    bioEdited = document.querySelector('.pop-up__field-bio').value;
    popupName.textContent = nameEdited;
    popupBio.textContent = bioEdited; 
}

popup.addEventListener('submit', formSubmitHandler);





