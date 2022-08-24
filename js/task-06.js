const inputEl = document.querySelector('#validation-input');
console.log("inputEl", inputEl)

inputEl.addEventListener('blur', onInputEL);

function onInputEL(event) {
    const input = event.currentTarget;
    const inputLength = inputEl.dataset.length;
  
    if (input.value.length === Number(inputLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');   
    }
}