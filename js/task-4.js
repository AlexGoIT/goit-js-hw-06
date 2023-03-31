const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incBtn.addEventListener('click', onIncrement);
decBtn.addEventListener('click', onDecrement);

function onIncrement() {
  valueEl.textContent = Number(valueEl.textContent) + 1;
}

function onDecrement() {
  valueEl.textContent = Number(valueEl.textContent) - 1;
}
