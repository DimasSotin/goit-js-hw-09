const STARAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const data = {
    email,
    message,
  };
  console.log(data);
  localStorage.removeItem(STARAGE_KEY);
  form.reset();
}
function onFormInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const data = {
    email,
    message,
  };
  saveToLS(STARAGE_KEY, data);
}
function saveToLS(key, value) {
  const zip = JSON.stringify(value).trim();
  localStorage.setItem(key, zip);
}
function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    return JSON.parse(zip);
  } catch {
    return zip;
  }
}
function init() {
  const data = loadFromLS(STARAGE_KEY) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}
init();
