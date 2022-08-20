import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
const FEEDBACK_KEY = 'feedback-form-state';
// const EMAIL_KEY = 'feedback-email';

const formEl = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
// console.log(inputEl);
// console.log(formEl);
// console.log(textareaEl);
const formData = {};

populateTextarea();

formEl.addEventListener('submit', onFormSubmit);
// emailEl.addEventListener('input', onEmailInput);
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
    // const message = event.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
};

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    console.log(saveMessage);

    if (saveMessage) {
        console.log(saveMessage);
        textareaEl.value = saveMessage;
    };
};

// const parseData = JSON.parse(saveMessage);
// console.log(parseData);