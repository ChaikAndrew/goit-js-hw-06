const listEl = document.querySelectorAll(".item");
console.log('Number of categories:', listEl.length);

listEl.forEach(function (categories) {
    console.log('Category:', categories.firstElementChild.textContent);
    console.log('Elements:', categories.lastElementChild.children.length);
})



