const button = document.querySelector('.button'),
  popup = document.querySelector('.popup-wrapper'),
  popupClose = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});
