const form = document.querySelector(".login-form");
const submitBtn = form.querySelector("button[type='submit']");

function handleSubmit(e) {
  e.preventDefault();

  const formData = {};

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    formData.email = email.value;
    formData.password = password.value;
    console.log(formData);
  }
}

form.addEventListener("submit", handleSubmit);
