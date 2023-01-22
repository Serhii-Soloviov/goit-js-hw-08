
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  labelEmail: document.querySelector('input'),
  labelMessage: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.labelEmail.addEventListener('input', throttle(onFormAddEmail, 500));
refs.labelMessage.addEventListener('input', throttle(onFormAddMessage, 500));

populateFormData();

function onFormSubmit(elem) {
  elem.preventDefault();

  if (refs.labelEmail.value === '' || refs.labelMessage.value === '') {
    alert('Будь ласка, заповніть всі поля');
  } else {
    elem.target.reset();
    localStorage.removeItem('email-value');
    localStorage.removeItem('message-value');
  }
}

function onFormAddEmail(elem) {
  const emailData = elem.target.value;
  localStorage.setItem('email-value', emailData);
}

function onFormAddMessage(elem) {
  const messageData = elem.target.value;
  localStorage.setItem('message-value', messageData);
}

function populateFormData() {
  const savedEmail = localStorage.getItem('email-value');
  const savedMessage = localStorage.getItem('message-value');

  if (savedEmail || savedMessage) {
    refs.labelEmail.value = savedEmail;
    refs.labelMessage.value = savedMessage;
  }
}