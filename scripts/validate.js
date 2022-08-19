
//включение валидации вызовом enableValidation
//все настройки передаются при вызове

  const formElement = document.querySelectorAll('.pop-up__form');
  const inputElement = Array.from(formElement.querySelectorAll('.pop-up__field'));
  const buttonElement = document.querySelectorAll('[type="submit"]');

//shows error message
  
const showInputError = (formElement, inputElement, errorMessage) => {
    //looking for error input
    const errorElement = formElement.querySelector(`.${inputElement.id}+.pop-up__field-error`);
    inputElement.classList.add('pop-up__field-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('pop-up__field-error_visible', 'pop-up__field_invalid');
    //checks input error type and gives message accordingly
    if (inputElement.value === '') {
        errorElement.textContent = 'Вы пропустили это поле.'
    }
    if (inputElement.type === 'url') {
        errorElement.textContent = 'Введите адрес сайта.'
    }
  };

//hides error message
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputSelector.id}+.pop-up__field-error`);
    inputElement.classList.remove('pop-up__field-error');
    errorElement.classList.remove('pop-up__field-error_visible');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formSelector, inputSelector);
    }
  };

  //toggles button state
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove('button_inactive');
  };
  }
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement => {
      return !inputElement.validity.valid;
    }));
  };
  
  //----
  //checks validity in the field by creating array from the fields
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.pop-up__field'));

  //using switch between two classes, as we have 2 different ones for 2 buttons
    const buttonElement = formElement.querySelectorAll('.pop-up__button-create:not(.pop-up__button-submit), .pop-up__button-submit:not(.pop-up__button-create)');
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
     
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






