const inputRef = document.querySelector('[data-length="6"]');
const maxSymbols = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', changeColorBorder);

function changeColorBorder(event) {
	if(event.target.value.length === maxSymbols){
		inputRef.classList.remove('invalid')
		inputRef.classList.add('valid')
	} else {
		inputRef.classList.remove('valid')
		inputRef.classList.add('invalid')
	}
}