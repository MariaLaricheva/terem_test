/*=============== HIDING HEADER ===============*/
const buttonYellow = document.getElementById('btn-yellow')
const header = document.getElementById('header')

function toggleHeader() {
    if (header.classList.contains('hidden')) {
        header.classList.remove('hidden')
    } else {
        header.classList.add('hidden')
    }
}

buttonYellow.addEventListener('click', toggleHeader);


/*=============== ORDER SHIFT ===============*/
const buttonGreen = document.getElementById('btn-green')
const orderShifter = document.getElementById('order-shifter')

function toggleOrder() {
    if (orderShifter.classList.contains('order-shift')) {
        orderShifter.classList.remove('order-shift')
    } else {
        orderShifter.classList.add('order-shift')
    }
}

buttonGreen.addEventListener('click', toggleOrder)


/*=============== MODAL ===============*/
const modalButton = document.getElementById('modal-btn')
const modal = document.getElementById('modal')


function closeModal() {
    modal.classList.add('hidden');
}

modalButton.addEventListener('click', closeModal);


/*=============== FORM ACTION ===============*/
const select1 = document.getElementById('datalist-1');
const select2 = document.getElementById('datalist-2');
const select3 = document.getElementById('datalist-3');
const select4 = document.getElementById('datalist-4');
const select5 = document.getElementById('datalist-5');
const textFieldShort = document.getElementById('short-input');
const textFieldLong = document.getElementById('long-input');
const formButton = document.getElementById('form-button')

const formStatus = document.getElementById('form-status');
const formContentDisplay = document.getElementById('form-content')

const formContent = {
    select1: undefined,
    select2: undefined,
    select3: undefined,
    select4: undefined,
    select5: undefined,
    textFieldShort: undefined,
    textFieldLong: undefined,
}

const sendForm = (e) => {
    e.preventDefault();
    // Check if the field has a value
    if (textFieldShort.value === ''
        || textFieldLong.value === ''
        || select1.value === ''
        || select2.value === ''
        || select3.value === ''
        || select4.value === ''
        || select5.value === '') {
        //show message
        formStatus.textContent = 'Не заполнено'
    } else {
        formStatus.textContent = 'Успех'

        //заполнение полей объекта
        formContent.select1 = select1.value;
        formContent.select2 = select2.value;
        formContent.select3 = select3.value;
        formContent.select4 = select4.value;
        formContent.select5 = select5.value;
        formContent.textFieldShort = textFieldShort.value;
        formContent.textFieldLong = textFieldLong.value;

        formContentDisplay.textContent = JSON.stringify(formContent)
        localStorage.setItem('form', JSON.stringify(formContent))

        //remove message after 1.5 seconds
        setTimeout(() => {
            alert('Успешно отправлено')
            //clearing input fields
            select1.value = '';
            select2.value = '';
            select3.value = '';
            select4.value = '';
            select5.value = '';
            textFieldShort.value = '';
            textFieldLong.value = '';
            formStatus.value = '';
            formStatus.textContent = '';
        }, 1500)
    }
}

formButton.addEventListener('click', sendForm)