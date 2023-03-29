const refInput = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');


console.log(refInput);
console.log(refText);

refInput.addEventListener('input', inputEvent);

function inputEvent(event) {

    refText.style.fontSize = `${Number(event.currentTarget.value)}px`;

};