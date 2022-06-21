const validateErrorText = document.querySelector('.validate');
const mailSubmitButton = document.querySelector('.button-hover-2');
const inputValidate = document.querySelector('.input-validate');
const regularValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



mailSubmitButton.addEventListener('click',submitButton)
inputValidate.addEventListener('keydown',getInputValue)


function getInputValue(e){
 const getData = e.target.value;
  const getValue = getData;
  submitButton({getValue})
  console.log("burası" + typeof getValue)
}



function submitButton({getValue}){
  if(!regularValidate.test(getValue)){
    validateErrorText.style.display = "block";
  }if(regularValidate.test(getValue)){
    validateErrorText.style.display = "";
  }if(getValue.length == 0){
    validateErrorText.style.display = "";
  }
}







