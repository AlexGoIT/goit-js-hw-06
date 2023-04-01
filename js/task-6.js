const input = document.querySelector("#validation-input");
const dataLength = input.querySelector("[data-length]");

input.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length < dataLength) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
