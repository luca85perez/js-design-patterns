function Modal(trigger, container, closeBtnClass) {
  this.trigger = document.querySelector(trigger);
  this.container = document.querySelector(container);
  this.closeBtnClass = closeBtnClass;
  return this.init();
}

Modal.prototype.open = function () {
  this.container.classList.add('is-open');
  return this;
};

Modal.prototype.close = function () {
  this.container.classList.remove('is-open');
  return this;
};

Modal.prototype.bindEvents = function () {
  const self = this;

  const closeBtn = this.container.querySelector(`.${this.closeBtnClass}`);
  closeBtn.addEventListener('click', function () {
    self.close();
  });

  this.trigger.addEventListener('click', function (e) {
    e.preventDefault();
    self.open();
  });

  return this;
};

Modal.prototype.addCloseBtn = function () {
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.classList.add(this.closeBtnClass);
  this.container.appendChild(closeBtn);
  return this;
};

Modal.prototype.init = function () {
  this.addCloseBtn();
  this.bindEvents();
  return this;
};

/*
<button class="js-open-modal1">Open Modal 1</button>
<button class="js-open-modal2">Open Modal 2</button>

<div class="js-modal1">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem saepe expedita maxime dolorum, aliquid? Maxime facere iure, sit laudantium explicabo veritatis ut doloremque minus enim quisquam incidunt voluptatum, molestias vero!</p>
</div>

<div class="js-modal2">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem saepe expedita maxime dolorum, aliquid? Maxime facere iure, sit laudantium explicabo veritatis ut doloremque minus enim quisquam incidunt voluptatum, molestias vero!</p>
</div>
*/

const modal1 = new Modal('.js-open-modal1', '.js-modal1', 'modal__close');
const modal2 = new Modal('.js-open-modal2', '.js-modal2', 'modal__close');

modal1.open();
