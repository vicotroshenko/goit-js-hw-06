const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', sendForm);




const userData = {}

function sendForm (event) {
	event.preventDefault();
	const inputEmailRef = event.target.elements[0];
	const inputPasswordRef = event.target.elements[1];
	if(inputEmailRef.value === '' || inputPasswordRef.value === ''){
		alert('Для відправки форми заповніть всі поля')
	} else {
		userData[inputEmailRef.type] = inputEmailRef.value;
		userData[inputPasswordRef.type] = inputPasswordRef.value;
		console.log(`Email ${userData.email}, Password ${userData.password}`)
		event.currentTarget.reset();
	}
}
console.log(userData)
