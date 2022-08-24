const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const bodyEl = document.querySelector('body')

inputEl.addEventListener('input', ({target}) => {
    // console.dir(target)

    if (target.value) {
         outputEl.innerText = target.value;   
    } else {
       outputEl.innerText = 'Anonymous';
    }  
})



