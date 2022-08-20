//включение валидации вызовом enableValidation
//все настройки передаются при вызове

const formElement = document.querySelectorAll(".pop-up__form");
const inputElement = Array.from(document.querySelectorAll(".pop-up__field"));
const buttonElement = document.querySelectorAll('[type="submit"]');

//shows error message

const showInputError = (formElement, inputElement, errorMessage) => {
  //looking for error input
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("pop-up__field-error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add(
    "pop-up__field-error_visible",
    "pop-up__field_invalid"
  );
};

//hides error message

const hideInputError = (formElement, inputElement) => {
  const errorElement = document.querySelector(
    `.${inputElement.id}-error`
  );
  inputElement.classList.remove("pop-up__field-error");
  errorElement.classList.remove("pop-up__field-error_visible");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }

};

//checks input status

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//toggles button state

const toggleButtonState = (inputElement, buttonElement) => {
  if (hasInvalidInput(inputElement)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.removeAttribute("disabled", true);
    buttonElement.classList.remove("button_inactive");
  }
};



//----
// checks validity in the field by creating array from the fields
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".pop-up__field"));
  const buttonElement = formElement.querySelector(".pop-up__button-submit");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

//creates aaray from form and fieldset
//enables validation
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".pop-up__form"));

  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formSelector);

    // const fieldsetList = Array.from(
    //   formSelector.querySelectorAll(".pop-up__form-fieldset")
    // );

    // fieldsetList.forEach((fieldSet) => {

    // });
  });
};

enableValidation();

//esc and overlay click close pop-up

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopupEsc()
  }
});

function closePopupEsc (){
  const popupList = Array.from(document.querySelectorAll('.pop-up'));
  popupList.forEach((popup) => {
    popup.classList.remove('pop-up_opened');
    });
}

document.addEventListener('click', function(evt){
  if(evt.target.classList.contains('pop-up_opened')){
    closePopupEsc()
}
})
