const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  isValid = form.checkValidity();

  if (password1.value !== password2.value) {
    password1.style.borderColor = "red";
    password2.style.borderColor = "red";
    messageContainer.style.borderColor = "red";
    message.style.color = "red";
    message.textContent = "As senhas não coincidem";
    return;
  } else {
    passwordsMatch = true;
    password1.style.borderColor = "green";
    password2.style.borderColor = "green";
  }

  if (!isValid && passwordsMatch) {
    message.textContent = "Por favor, preencha os campos corretamente";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  } else {
    message.textContent = "Formulário recebido";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

form.addEventListener("submit", processFormData);
