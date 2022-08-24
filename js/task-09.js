function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

btnEl.addEventListener('click', changeColor);

function changeColor () {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
}

