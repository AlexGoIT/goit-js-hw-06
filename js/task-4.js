const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

function updateUI() {
  valueEl.textContent = counterValue;
}

incBtn.addEventListener('click', () => {
  counterValue += 1;
  updateUI();
});

decBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateUI();
});
