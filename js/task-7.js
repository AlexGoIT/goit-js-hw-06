const inputRange = document.querySelector("#font-size-control");
const textLabel = document.querySelector('#text');

inputRange.addEventListener('input', () => {
  const inputRangeValue = inputRange.value;
  textLabel.style.fontSize = `${inputRangeValue}px`;
});
