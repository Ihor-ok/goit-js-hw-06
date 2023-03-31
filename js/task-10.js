function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refNumberOfElement = document.querySelector('input');
const refCreateElement = document.querySelector('[data-create]');
const refBoxes = document.querySelector('#boxes');
const refDestroyElement = document.querySelector('[data-destroy]');

refNumberOfElement.addEventListener('change', createNumberOfElement);
refCreateElement.addEventListener('click', startCreateBoxes);
refDestroyElement.addEventListener('click', destroyBoxes);

let amount = 0;

function createNumberOfElement(event) {
  amount = Number(event.currentTarget.value);
};

function startCreateBoxes() {
  createBoxes(amount);
};

function createBoxes() {

  let size = 30;

  for (let i = 1; i <= amount; i++) {
    const boxes = document.createElement('div');
    
    boxes.classList.add('boxes-element');
    boxes.style.width = `${size}px`;
    boxes.style.height = `${size}px`;
    boxes.style.background = getRandomHexColor();
    boxes.style.marginTop = '10px';
    boxes.style.marginLeft = '10px';
    refBoxes.append(boxes);
    size += 10;
    console.log(i);
  }
  
};

function destroyBoxes() {
  refBoxes.innerHTML = '';
  refNumberOfElement.value = '';
  amount = 0;
  
};