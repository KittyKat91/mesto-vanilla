
//second pop-up setup
    const addNewPlace = document.querySelector('.profile__add-button'); //plus button
    const newPlaceForm = document.querySelector('.pop-up_type_place'); //new place pop-up form
    const closeBtn = document.querySelector('.pop-up__container-button-close'); //close button

addNewPlace.addEventListener('click', () => openAddPlacePopup());


function openAddPlacePopup() {
    newPlaceForm.classList.add('pop-up_opened');
}

console.log(newPlaceForm);

closeBtn.addEventListener('click', () => closeAddPlacePopup());

function closeAddPlacePopup () {
    newPlaceForm.classList.remove('pop-up_opened');
}
console.log(closeBtn);



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
    placeimg: '.place__img', //image of the place
    placeBigImage: '.pop-up_type_image',
    popupImage:'.pop-up__photo',
    popupImageText:'.pop-up__caption',
    imgPopupCaption: '.pop-up__caption', //big image text
    placename: '.place__title', //the name of the place
    placetemplate: '#place__template',
    placedeleteBtn: '.place__button-delete',
    imgDeleteBtn: '.pop-up__button-close_image',
    placecardList: '.places__cards', //ul 
    placeLikeBtn: '.place__like-button',
    placeLikeBtnActive: '.place__like-button_active',//liked button
  }

  const cardsContainer = document.querySelector(cardInputs.placecardList);

  const template = document.querySelector(cardInputs.placetemplate).content;
  const placeLikeBtn = document.querySelectorAll(cardInputs.placeLikeBtn);
  const popupImgBig = document.querySelector(cardInputs.placeBigImage);
  const popupImage = document.querySelector(cardInputs.popupImage);
  const popupImageText = document.querySelector(cardInputs.popupImageText);
  const imgDeleteBtn = document.querySelector(cardInputs.imgDeleteBtn);
  
 //template to create new card
 function createNewPlace(link, name){
    const newPlaceCard = template.querySelector(cardInputs.place).cloneNode(true);

    const image = newPlaceCard.querySelector(cardInputs.placeimg);
    const placeName = newPlaceCard.querySelector(cardInputs.placename);
    const place = newPlaceCard.querySelector(cardInputs.place);
    
    const likeBtn = newPlaceCard.querySelector(cardInputs.placeLikeBtn);
    const deleteBtn = newPlaceCard.querySelector(cardInputs.placedeleteBtn);
    

    image.src = link;
    image.alt = name;
    placeName.textContent = name;


    deleteBtn.addEventListener ('click', () => newPlaceCard.remove());
    likeBtn.addEventListener ('click', () => likeBtn.classList.toggle('place__like-button_active'));
    image.addEventListener ('click', () => openBigCard(link, name));
    

    return newPlaceCard;
  } 

  // big img open
  function openBigCard(link, name){
    popupImgBig.classList.add('pop-up_opened');
    popupImage.src = link;
    popupImage.alt = name;
    popupImageText.textContent = name;
};

imgDeleteBtn.addEventListener ('click', () => popupImgBig.classList.remove('pop-up_opened'));
  


  function renderPlace (container, data, position = 'before'){
    if (position === 'before') {
    container.prepend(createNewPlace(data.link, data.name));
    }
    if (position === 'after') {
        container.append(createNewPlace(data.link, data.name));
        }
  }

//taking initial cards to the screen
function createInitialCards(){
    initialCards.forEach((item) => renderPlace (cardsContainer, item, 'after'));
    } 

    createInitialCards();

//adding new photos - taking info from pop-up into the new card

const formNewPlace = document.querySelector('.pop-up__form_type_addplace');
const placeImage = document.querySelector(cardInputs.placeimg);
const placeTitle = document.querySelector('.place__title');
const placePopupTitle = document.querySelector('.pop-up__field-title');
const placePopupLink = document.querySelector('.pop-up__field-link');


function cardSubmitHandler(evt) {
    evt.preventDefault();
    placeImage.src = placePopupLink.value;
    placeTitle.textContent = placePopupTitle.value;
    placeImage.alt = placePopupTitle.value;
    
}

formNewPlace.addEventListener('submit', () => cardSubmitHandler());


// **** Sprint 4 ****

const popupProfileName = document.querySelector('.pop-up__field-name');
const popupProfileBio = document.querySelector('.pop-up__field-bio');
const editedProfileName = document.querySelector('.profile__name');
const editedProfileBio = document.querySelector('.profile__bio');
const popup = document.querySelector ('.pop-up_type_user');
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
  



