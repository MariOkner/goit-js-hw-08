import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const FEEDBACK_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const mailEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const formData = {};

populateForm();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(FEEDBACK_KEY);
};

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
};

function populateForm() {
    const saveMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    if (saveMessage) {
        mailEl.value = saveMessage.email;
        textareaEl.value = saveMessage.message
        // console.log('message:', textareaEl.value = saveMessage.message);
    };
   
    // Object.keys(saveMessage).forEach(name => {
    //     const inp = frm.querySelector(`[name="${name}"]`);
    //     if (inp) inp.value = saveMessage[name];
    // });
};