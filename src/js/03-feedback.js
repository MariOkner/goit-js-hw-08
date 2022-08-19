import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/03-feedback.css';
const FEETBACK_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));


function onFormSubmit(e) {
    e.preventDefault();

    console.log('Отправляем форму');
    e.currentTarget.reset();
    localStorage.removeItem('FEETBACK_KEY');
}


function onTextareaInput(e) {
    const message = e.target.value;
    // console.log(message);

    localStorage.setItem('FEETBACK_KEY', message);
    
}


function populateTextarea() {
    const saveMessage = localStorage.getItem('FEETBACK_KEY');
    
    if (saveMessage) {
        console.log(saveMessage);
        refs.textarea.value = saveMessage;    
    }

}