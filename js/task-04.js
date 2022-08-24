let counterValue = 0;


const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const spanEl = document.querySelector('#value');
console.dir(spanEl.style.opacity) 

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
    // console.log("counterValue", counterValue)
     if (counterValue > 0) {
        spanEl.style.color = 'green';
     } else if (counterValue === 0) {
        spanEl.style.color = 'black';
     }
     else { spanEl.style.color = 'red'; }  
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
    // console.log("counterValue", counterValue)
    if (counterValue > 0) {
        spanEl.style.color = 'green';
     } else if (counterValue === 0) {
        spanEl.style.color = 'black';
     }
     else { spanEl.style.color = 'red'; } 
});

