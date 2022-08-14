
//inputs of the card
const cardInputs = {
    place: '.place',
    placeimg: '.place__img', //image of the place
    placeBigImage: '.pop-up_type_image',
    popupImage: '.pop-up__photo',
    popupImageText: '.pop-up__caption',
    imgPopupCaption: '.pop-up__caption', //big image text
    placename: '.place__title', //the name of the place
    placetemplate: '#place__template',
    placedeleteBtn: '.place__button-delete',
    placecardList: '.places__cards', //ul 
    placeLikeBtn: '.place__like-button',
    placeLikeBtnActive: '.place__like-button_active',//liked button
}


const newPlaceAdd = document.querySelector('.profile__add-button'); //plus button
const newPlaceForm = document.querySelector('.pop-up_type_place'); //new place pop-up form
const popupContainerCloseBtn = document.querySelector('.pop-up__container-button-close'); //close button


const cardsContainer = document.querySelector(cardInputs.placecardList);

const template = document.querySelector(cardInputs.placetemplate).content;
const placeLikeBtn = document.querySelectorAll(cardInputs.placeLikeBtn);
const popupImgBig = document.querySelector(cardInputs.placeBigImage);
const popupImage = document.querySelector(cardInputs.popupImage);
const popupImageText = document.querySelector(cardInputs.popupImageText);
const imgDeleteBtn = document.getElementById('pop-up__image-close');


const formNewPlace = document.querySelector('.pop-up__form_type_addplace');
const placeImage = document.querySelector(cardInputs.placeimg);
const placeTitle = document.querySelector('.place__title');
const placePopupTitle = document.querySelector('.pop-up__field-title');
const placePopupLink = document.querySelector('.pop-up__field-link');

const popupProfileName = document.querySelector('.pop-up__field-name');
const popupProfileBio = document.querySelector('.pop-up__field-bio');
const editedProfileName = document.querySelector('.profile__name');
const editedProfileBio = document.querySelector('.profile__bio');
const popupUser = document.querySelector('.pop-up_type_user');
const popupEdit = document.querySelector('.profile__edit-button');

const closePopupButton = document.querySelector('.pop-up__button-close');

const profileEditFormElement = document.querySelector('.pop-up__submitform');


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



function openPopup(modal) {
    modal.classList.add('pop-up_opened');
}


function closePopup(modal) {
    modal.classList.remove('pop-up_opened');
}

//template to create new card
function createNewPlace(link, name) {
    const newPlaceCard = template.querySelector(cardInputs.place).cloneNode(true);

    const image = newPlaceCard.querySelector(cardInputs.placeimg);
    const placeName = newPlaceCard.querySelector(cardInputs.placename);
    const place = newPlaceCard.querySelector(cardInputs.place);

    const likeBtn = newPlaceCard.querySelector(cardInputs.placeLikeBtn);
    const deleteBtn = newPlaceCard.querySelector(cardInputs.placedeleteBtn);


    image.src = link;
    image.alt = name;
    placeName.textContent = name;


    deleteBtn.addEventListener('click', () => newPlaceCard.remove());
    likeBtn.addEventListener('click', () => likeBtn.classList.toggle('place__like-button_active'));
    image.addEventListener('click', () => openBigCard(link, name));


    return newPlaceCard;
}

//adding new cards
function renderPlace(container, data, position = 'before') {
    if (position === 'before') {
        container.prepend(createNewPlace(data.link, data.name));
    }
    if (position === 'after') {
        container.append(createNewPlace(data.link, data.name));
    }
}

//taking initial cards to the screen
function createInitialCards() {
    initialCards.forEach((item) => renderPlace(cardsContainer, item, 'after'));
}

createInitialCards();

// big img open
function openBigCard(link, name) {
    popupImgBig.classList.add('pop-up_opened');
    popupImage.src = link;
    popupImage.alt = name;
    popupImageText.textContent = name;
};


//profile edit form
function submitFormHandler(evt) {
    evt.preventDefault();
    editedProfileName.textContent = popupProfileName.value;
    editedProfileBio.textContent = popupProfileBio.value;
    closePopup(popupUser);
}

//card edit pop-up
function submitCardHandler(event) {
    event.preventDefault();
    const item = { name: placePopupTitle.value, link: placePopupLink.value };
    placePopupTitle.value = '';
    placePopupLink.value = '';
    renderPlace(cardsContainer, item, ' before');
    closePopup(newPlaceForm);

}



newPlaceAdd.addEventListener('click', () => openPopup(newPlaceForm));
formNewPlace.addEventListener('submit', submitCardHandler);

imgDeleteBtn.addEventListener('click', () => popupImgBig.classList.remove('pop-up_opened'));
popupContainerCloseBtn.addEventListener('click', () => closePopup(newPlaceForm));
closePopupButton.addEventListener('click', closePopup(popupUser));

profileEditFormElement.addEventListener('submit', submitFormHandler);

popupEdit.addEventListener('click', () => {
    popupProfileName.value = editedProfileName.textContent;
    popupProfileBio.value = editedProfileBio.textContent;
    openPopup(popupUser);
});






