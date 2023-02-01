const form = document.getElementById("user-form");

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

  const user = {
    name: name,
    email: email,
  };

  localStorage.setItem("user", JSON.stringify(user));

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add the new user to the array of users
  users.push(user);

  // Convert the array of users to a string and store it in local storage
  localStorage.setItem("users", JSON.stringify(users));

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
  `;

  // Append the row to the table
  user-table.appendChild(row);

  alert("Details saved successfully!");

});
