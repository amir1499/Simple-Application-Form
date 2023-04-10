const form = document.querySelector('form');
const errorMessage = document.querySelector('#errorMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const number = document.querySelector('#number').value;
  const message = document.querySelector('#message').value;

  if (!name || !email || !number || !message) {
    errorMessage.innerHTML = 'All fields are required';
    errorMessage.style.display = 'block';
    return;
  }

  if (!number.match(/^\d{3}-\d{3}-\d{4}$/)) {
    errorMessage.innerHTML = 'Phone number must be in the format: 123-456-78
