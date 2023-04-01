const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
  if (e.currentTarget.value.length > 0) {
    nameOutput.textContent = e.currentTarget.value;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
