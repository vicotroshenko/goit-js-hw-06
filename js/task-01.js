// ============================= 1 ===========================
const categoriesRef = document.querySelector('#categories');
const allCategoriesChildren = categoriesRef.querySelectorAll('.item');

console.log(`Number of elements: ${allCategoriesChildren.length}`)

allCategoriesChildren.forEach(element => {
	console.log(`Category: ${element.firstElementChild.textContent}`);
	console.log(`Elements: ${element.lastElementChild.querySelectorAll('li').length}`)

});
// ============================= 2 ===========================
