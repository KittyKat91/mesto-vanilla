

//second pop-up setup
const addNewPlace = document.querySelector('.profile__add-button');
const newPlaceForm = document.querySelector('.pop-up__new-place');
const newPlacePopUpCloseButton = document.querySelector('.pop-up__new-place_button-close');

addNewPlace.addEventListener('click', () => openAddPlacePopup());

function openAddPlacePopup() {
    newPlaceForm.classList.add('pop-up__new-place_opened');
}

newPlacePopUpCloseButton.addEventListener('click', () => closeAddPlacePopup());

function closeAddPlacePopup () {
    newPlaceForm.classList.remove('pop-up__new-place_opened');
}

//cards to be loaded on the page
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  //inputs of the card
  const cardInputs = {
    place: '.place',
    image: '.place__img', //image of the place
    name: '.place__title', //the name of the place
    template: '#place__template',
    deleteBtn: '.place__button-delete',
    cardList: '.places__cards', //ul 
    likeBtn: '.place__like-button',
  }


 //template to create new card
 function createNewPlace(link, name){
    const newPlaceCard = template.cloneNode(true);

    const image = document.querySelector(cardInputs.image);
    const placeName = document.querySelector(cardInputs.name);
    const place = document.querySelector(cardInputs.place);
    const template = document.querySelector(cardInputs.template).content;
    const cardList = document.querySelector(cardInputs.cardList);
    const likeBtn = document.querySelector(cardInputs.likeBtn);
    const deleteBtn = document.querySelector(cardInputs.deleteBtn);

    image.alt = link;
    image.name = name;
    name.textContent = name;

    deleteBtn.addEventListener ('click', () => newPlaceCard.remove());

    return newPlaceCard;
    console.log (newPlaceCard);
  }

  function renderPlace (container, data, position = 'before'){
    if (position === before) {
    newPlaceCard.prepend(createNewPlace(data.link, data.name));
    }
  }



//taking initial cards to the screen
function createInitialCards(){
    initialCards.forEach((item) => cards.append(createNewPlace(item.link, item.name)));
    } 

// **** Sprint 4 ****

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
  




