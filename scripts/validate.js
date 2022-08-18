
//включение валидации вызовом enableValidation
//все настройки передаются при вызове

enableValidation({
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__field',
    submitButtonSelector: '.pop-up__button-submit',
    createButtonSelector: '.pop-up__button-create',
    inactiveSubmitButtonClass: '.pop-up__button-submit_disabled',
    inactiveCreateButtonClass: '.pop-up__button-create_disabled',
    inputSelector: "`.${inputSelector.id}-error`",
    inputErrorClass: '.pop-up__field-error', //span
    errorClass: '.pop-up__field-error_visible' 
  });

//shows error message
const showInputError = (formSelector, inputSelector, errorMessage) => {
    //looking for error input
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add('pop-up__field-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('pop-up__field-error_visible', 'pop-up__field_invalid');
    //checks input error type and gives message accordingly
    if (inputSelector.value === '') {
        errorElement.textContent = 'Это поле нужно заполнить'
    }
    if (inputSelector.type === 'url') {
        errorElement.textContent = 'Здесь должен быть URL'
    }
  };

//hides error message
  
  const hideInputError = (formSelector, inputSelector) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove('pop-up__field-error');
    errorElement.classList.remove('pop-up__field-error_visible');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formSelector, inputSelector) => {
    if (!inputSelector.validity.valid) {
      showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
      hideInputError(formSelector, inputSelector);
    }
  };

  //toggles button state
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  };
  }
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
      return !inputSelector.validity.valid;
    });
  };
  
  //----
  //checks valifity in the field by creating array from the fields
  const setEventListeners = (formSelector) => {
    const inputList = Array.from(formSelector.querySelectorAll('.pop-up__field'));

  //using switch between two classes, as we have 2 different ones for 2 buttons
    const buttonElement = formSelector.querySelectorAll('.pop-up__button-create:not(.pop-up__button-submit), .pop-up__button-submit:not(.pop-up__button-create)');
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', function () {
        checkInputValidity(formSelector, inputSelector);
     
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
  

  //creates aaray from form and fieldset
  //enables validation
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.pop-up__form'));
   
    formList.forEach((formSelector) => {
      formSelector.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      
    const fieldsetList = Array.from(formSelector.querySelectorAll('.pop-up__form-fieldset'));
      
      fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
  });  
    
  });
  };
  
  enableValidation();






