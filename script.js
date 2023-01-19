/*=============== HIDING HEADER ===============*/
const buttonYellow = document.getElementById('btn-yellow');
const header = document.getElementById('header');

buttonYellow.addEventListener('click',
    () => header.classList.toggle('hidden'));


/*=============== ORDER SHIFT ===============*/
const buttonGreen = document.getElementById('btn-green');
const orderShifter = document.getElementById('order-shifter');

buttonGreen.addEventListener('click',
    () => orderShifter.classList.toggle('order-shift'));


/*=============== MODAL ===============*/
const modalButton = document.getElementById('modal-btn');
const modal = document.getElementById('modal');

modalButton.addEventListener('click', () => modal.classList.add('hidden'));


/*=============== FORM ACTION ===============*/
const formButton = document.getElementById('form-button');
const inputFields = Array.from(document.getElementsByClassName('input'));
const formStatus = document.getElementById('form-status');
const formContentDisplay = document.getElementById('form-content');

const formContent = [];

const sendForm = (e) => {
    e.preventDefault();
    // Check if all fields have values
    if ( inputFields.find( el => el.value === '') ) {
        formStatus.textContent = 'Не заполнено';
    } else {
        formStatus.textContent = 'Успех';
        //saving values
        inputFields.forEach((field) => {
            formContent.push(field.value);
        })

        formContentDisplay.textContent = JSON.stringify(formContent);
        localStorage.setItem('form', JSON.stringify(formContent));

        //removing message after 1.5 seconds
        setTimeout(() => {
            alert('Успешно отправлено');
            //clearing input fields
            inputFields.map(field => {field.value = ''});
            formStatus.value = '';
            formStatus.textContent = '';
        }, 1500);
    }
}

formButton.addEventListener('click', sendForm);