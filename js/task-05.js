const refInput = document.querySelector('#name-input');
const refName = document.querySelector('#name-output')


refInput.addEventListener('input', onInputChange)

function onInputChange(event) {
 
    if (event.currentTarget.value.length > 0) {
        refName.textContent = event.currentTarget.value;
    } else { refName.textContent = "Anonymous"};
   
};
