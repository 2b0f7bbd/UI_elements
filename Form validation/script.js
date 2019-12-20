const form = document.querySelector('.signup-form'),
  feedback = document.querySelector('.feedback'),
  usernamePattern = /^[a-zA-z0-9]{5,10}$/;
//Submit validation
form.addEventListener('submit', e => {
  e.preventDefault();
  const username = form.username.value;
  if (usernamePattern.test(username)) {
    feedback.textContent = 'Success';
  } else {
    feedback.textContent = 'Username should be 5 to 10 characters long';
  }
});
//Keyboard validation
form.addEventListener('keyup', e => {
  const usernameInput = document.querySelector('#username');
  if (usernamePattern.test(e.target.value)) {
    usernameInput.setAttribute('class', 'success');
  } else {
    usernameInput.setAttribute('class', 'error');
  }
});
