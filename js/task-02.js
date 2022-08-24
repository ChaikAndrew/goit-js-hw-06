const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// console.log(ingredients);

const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  itemEl.classList.add('item');

  return itemEl;
});
// console.log(elements);
 listEl.append(...elements);