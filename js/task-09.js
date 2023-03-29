function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refBody = document.querySelector('body')
const refBackgroundColorText = document.querySelector('.color');
const refButton = document.querySelector('.change-color');

refButton.addEventListener('click', chengeColor);

function chengeColor(event) {

  const color = getRandomHexColor();

  refBackgroundColorText.textContent = color
  refBody.style.backgroundColor = color;
};