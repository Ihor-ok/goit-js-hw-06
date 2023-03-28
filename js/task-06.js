const refInput = document.querySelector('#validation-input');

refInput.addEventListener('input', onInputChange);
refInput.addEventListener('blur', checksTheContent);

let inputLength = 0;

function checksTheContent(event) {

    if (inputLength === Number(refInput.dataset.length)) {
        refInput.classList.remove('invalid');
        refInput.classList.add('valid');
        
    } else {
        refInput.classList.remove('valid');
        refInput.classList.add('invalid');
    };

};

function onInputChange(event) {
    inputLength = event.currentTarget.value.length;
};