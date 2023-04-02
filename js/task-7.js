const inputRange = document.querySelector("#font-size-control");
const textLabel = document.querySelector("#text");

inputRange.value = Number(inputRange.getAttribute("min"));

inputRange.addEventListener("input", () => {
  textLabel.style.fontSize = `${inputRange.value}px`;
});
