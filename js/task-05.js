const refInput = document.querySelector('#name-input');
const refName = document.querySelector('#name-output')

// console.log(refInput.currentTarget.elements);
console.log(refInput);
console.log(refName);

refInput.addEventListener('input', onInputChange)

function onInputChange(event) {
 
    if (event.currentTarget.value.length > 0) {
        refName.textContent = event.currentTarget.value;
    } else { refName.textContent = "Anonymous"};
   
};

// console.log("");