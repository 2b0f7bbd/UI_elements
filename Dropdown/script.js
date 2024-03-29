class Dropdown {
  constructor(container) {
    this.trigger = container.querySelector('.trigger');
    this.content = container.querySelector('.content');
  }
  init() {
    this.trigger.addEventListener('click', () => {
      this.trigger.classList.toggle('active');
      this.content.classList.toggle('active');
    });
  }
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
