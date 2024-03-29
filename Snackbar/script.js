class Snackbar {
  constructor() {
    this.snackbar = document.createElement('div');
  }
  init() {
    this.snackbar.classList.add('snackbar');
    document.querySelector('body').appendChild(this.snackbar);
  }
  show(message) {
    this.snackbar.textContent = message;
    this.snackbar.classList.add('active');
    setTimeout(() => {
      this.snackbar.classList.remove('active');
    }, 4000);
  }
}

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');

button.addEventListener('click', () => {
  snackbar.show('you clicked me');
});
