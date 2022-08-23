
const config = {
  formSelector: '.pop-up__form',
  fieldSelector: '.pop-up__field',
  submitButtonSelector: '[type="submit"]',
  inactiveButtonClass: 'button_inactive',
  inputErrorVisible: 'pop-up__field-error_visible',
  inputInvalid: 'pop-up__field_invalid',
  errorClass: 'pop-up__field-error',
}; 

//включение валидации вызовом enableValidation
//все настройки передаются при вызове

const formElement = document.querySelectorAll(config.formSelector);
const inputElement = Array.from(document.querySelectorAll(config.fieldSelector));
const buttonElement = document.querySelectorAll(config.submitButtonSelector);

//shows error message

const showInputError = (formElement, inputElement, errorMessage, configs) => {
  //looking for error input
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(configs.errorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(
    configs.inputErrorVisible,
    configs.inputInvalid,
  );
};

//hides error message

const hideInputError = (formElement, inputElement, configs) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-error`
  );
  inputElement.classList.remove(configs.errorClass);
  errorElement.classList.remove(configs.inputErrorVisible);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, configs) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, configs);
  } else {
    hideInputError(formElement, inputElement, configs);
  }

};

//checks input status

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//disable submit button
const submitButtonDisabled = (buttonElement, configs) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(configs.inactiveButtonClass);
}

//enable submit button
const submitButtonEnabled = (buttonElement, configs) => {
  buttonElement.removeAttribute("disabled", true);
  buttonElement.classList.remove(configs.inactiveButtonClass);
}

//toggles button state

const toggleButtonState = (inputElement, buttonElement, configs) => {
  if (hasInvalidInput(inputElement)) {
  submitButtonDisabled(buttonElement, configs);
  } else {
  submitButtonEnabled(buttonElement, configs);
  }
};



//----
// checks validity in the field by creating array from the fields
const setEventListeners = (formElement, configs) => {
  const inputList = Array.from(formElement.querySelectorAll(configs.fieldSelector));
  const buttonElement = formElement.querySelector(configs.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, configs);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, configs );

      toggleButtonState(inputList, buttonElement, configs );
    });
  });
};

//creates aaray from form and fieldset
//enables validation

const enableValidation = (configs) => {
  const formList = Array.from(document.querySelectorAll(configs.formSelector));

  formList.forEach((formElement) => {setEventListeners(formElement, configs)});
};
  

 enableValidation(config);

// const enableValidation = (e) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (e) => {
//     })
//     setEventListeners(formElement, buttonElement)
//   })
// };
