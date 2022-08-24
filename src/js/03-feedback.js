import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const FEEDBACK_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const mailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

let formData = {};
populateForm();


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
    event.preventDefault();
    
    const mailValue = event.target.elements.email.value;
    const messageValue = event.target.elements.message.value;
    const UserObj = {
        mailValue,
        messageValue,
    };
    console.log(UserObj);

    if (mailValue === '' || messageValue === '') {   
        return alert('All fields must be filled in');
    }

    event.target.reset();
    localStorage.removeItem(FEEDBACK_KEY);
};

function onFormInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
};

function populateForm() {
    const saveMessage = localStorage.getItem(FEEDBACK_KEY);
    
    if (saveMessage) {
        formData = JSON.parse(saveMessage);
        
        mailEl.value = formData.email ? formData.email : '';
        messageEl.value = formData.message ? formData.message : '';
    }
};
