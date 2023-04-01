const form = document.querySelector(".login-form");

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

    e.currentTarget.reset();
  }
}

form.addEventListener("submit", handleSubmit);
