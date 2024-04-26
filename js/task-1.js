// const categoriesEl = document.querySelectorAll('.item').length;
// console.log(`Number of categories: ${categoriesEl}`);

const categoriesEl = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);


const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(function (item) {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelector('ul').children.length}`);
});