var valueCounter = 0;

const valueDecrement = document.querySelector('[data-action="decrement"]');
const valueIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');


valueDecrement.addEventListener('click', () => {
    
    valueCounter -= 1;
    value.textContent = valueCounter;
});

valueIncrement.addEventListener('click', () => {
    
    valueCounter += 1;
    value.textContent = valueCounter;
});
