class Counter {

	constructor ({ rootSelector, value=0, step, }={}){
	this.value = value;
	this.step = step;
	this.elements = this.getElement(rootSelector);
	this.blindEvents();
	}
}
console.dir(Counter)

Counter.prototype.getElement = function (rootSelector) {
	const elements = {};
	elements.container = document.querySelector(rootSelector);
	elements.buttonIncrElem = elements.container.querySelector('[data-action="increment"]');
	elements.buttonDecrElem = elements.container.querySelector('[data-action="decrement"]');
	elements.value = elements.container.querySelector('#value');

	return elements;
};

Counter.prototype.blindEvents = function() {
	this.elements.buttonDecrElem.addEventListener('click', () => {
		this.derimentn();
		this.changeNumber();
	});
	this.elements.buttonIncrElem.addEventListener('click', () => {
		this.incriment();
		this.changeNumber();
	});
};

Counter.prototype.changeNumber = function () {
	this.elements.value.textContent = this.value
	console.log('Result', this.elements.value.textContent)
}

Counter.prototype.derimentn = function () {
	this.value -= this.step
};

Counter.prototype.incriment = function () {
	this.value += this.step
};

const conterPlug = new Counter({ rootSelector: "#counter", step: 1 });

