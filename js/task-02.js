// ============================= 2 ==========================
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients')

const items = ingredients.map((element) => {
  let itemRef = document.createElement('li');
  itemRef.textContent = element;
  itemRef.classList.add('item');
  return itemRef;
});
listRef.append(...items)


// ============================= 2 ==========================

