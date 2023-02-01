const form = document.getElementById('user-form');

form.addEventListener("submit", function (event) {
event.preventDefault();

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

const name = nameField.value;
const email = emailField.value;

localStorage.setItem("name", name);
localStorage.setItem("email", email);

nameField.value = "";
  emailField.value = "";

});
