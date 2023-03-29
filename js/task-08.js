const data = {};

const refForm = document.querySelector('.login-form');

refForm.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault()

    data.email = event.currentTarget.elements.email.value;
    data.password = event.currentTarget.elements.password.value;

    if (event.currentTarget.elements.email.value.length === 0 || event.currentTarget.elements.password.value.length === 0) {
        alert("Всі поля повинні бути заповнені");
        return;

    };

    refForm.reset();

    console.log(data);

};

