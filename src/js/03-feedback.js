import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const FEEDBACK_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const mailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

populateForm();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
    event.preventDefault();

    let eventMailValue = event.target.elements.email.value;
    let eventMessageValue = event.target.elements.message.value;
    const UserObj = { email: eventMailValue, message: eventMessageValue};
   
    if (eventMailValue === '' || eventMessageValue === '') {   
        return alert('All fields must be filled in');
    }

    event.target.reset();
    localStorage.removeItem(FEEDBACK_KEY);
};

function onFormInput(event) {
    const formData = localStorage.getItem(FEEDBACK_KEY) ? JSON.parse(localStorage.getItem(FEEDBACK_KEY)) : {};
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
};

function populateForm() {
    const saveMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    if (saveMessage) {
        mailEl.value = saveMessage.email;
        messageEl.value = saveMessage.message;
    };
    console.log(saveMessage);
};