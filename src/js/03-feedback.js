import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const FEEDBACK_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');

const formData = {};

populateTextarea();

formEl.addEventListener('submit', onFormSubmit);
textareaEl.addEventListener('input', throttle(onTextareaInput, 500));

formEl.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    // console.log(formData);
});

function onFormSubmit(event) {
    event.preventDefault();

    event.target.reset();

    localStorage.removeItem(FEEDBACK_KEY);
};

function onTextareaInput(event) {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
};

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    
    if (saveMessage) {
        console.log('email:', textareaEl.value = saveMessage.email);
        console.log('message:', textareaEl.value = saveMessage.message);
    };
};
