const input = document.querySelector("#validation-input");
const dataLength = Number(input.getAttribute("data-length"));

function handleBlur(e) {
  if (e.currentTarget.value.length < dataLength) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else if (e.currentTarget.value.length >= dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  
  if (e.currentTarget.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  }
}

input.addEventListener("blur", handleBlur);
