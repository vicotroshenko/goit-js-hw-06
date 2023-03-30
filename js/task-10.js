function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxRef = document.getElementById('boxes')
const buttonCreateRef = document.querySelector('[data-create]')
const buttonDestroyRef = document.querySelector('[data-destroy]')

buttonCreateRef.addEventListener('click', () => {
  let input = document.querySelector('input').valueAsNumber;
  createBoxes(input)
});
buttonDestroyRef.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  destroyBoxes()
    for (let i = 1; i <= amount; i++) {
      const newBox = document.createElement("div");
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.marginTop = "5px";
      newBox.style.width = `${20 + 10 * i}px`;
      newBox.style.height = `${20 + 10 * i}px`;
      boxRef.append(newBox);
    }
  
  
}

function destroyBoxes() {
  boxRef.innerHTML = "";
}
