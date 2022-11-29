import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

populateInput();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onInput(e) {
  formData[e.target.name] = e.target.value;
    
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
    const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (savedData) {
        console.log(savedData);
        email.value = savedData.email || '';
        message.value = savedData.message || '';
    }
}