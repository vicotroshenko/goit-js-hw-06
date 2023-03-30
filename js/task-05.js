const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


inputRef.addEventListener('input', changeSpan);


function changeSpan(event) {
	spanRef.textContent = event.target.value || 'Anonymous'
}
