const inputRangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
spanRef.style.fontSize = inputRangeRef.value +'px';

inputRangeRef.addEventListener('input', (event) => {
	spanRef.style.fontSize = event.target.value +'px';
});
