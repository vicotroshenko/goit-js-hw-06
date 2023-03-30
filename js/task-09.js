function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanColorRef = document.querySelector('.color');

buttonRef.addEventListener('click', () => {
  const bodyColor = getRandomHexColor();
  bodyRef.style.backgroundColor = bodyColor;
  spanColorRef.textContent = bodyColor;
});
