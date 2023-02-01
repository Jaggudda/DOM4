const form = document.getElementById("user-form");
const table = document.getElementById("user-table");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    const name = nameField.value;
    const email = emailField.value;
    const password = passwordField.value;

    const user = {
        name: name,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
  `;

    table.appendChild(row);

    alert("Details saved successfully!");
});

const users = JSON.parse(localStorage.getItem("users")) || [];
for (const user of users) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
  `;
    table.appendChild(row);
}

row.querySelector(".delete-button").addEventListener("click", function () {
    // Remove the row from the table
    row.remove();

    // Remove the user from the array of users stored in local storage
    users = users.filter(function (u) {
      return u.email !== email;
    });
    localStorage.setItem("users", JSON.stringify(users));
  });

  // Append the row to the table
  table.appendChild(row);

  // Show a success message
  alert("Details saved successfully!");
});

// Get the previously stored users and display them on the screen
const users = JSON.parse(localStorage.getItem("users")) || [];
for (const user of users) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
    <td><button class="delete-button">Delete</button></td>
  `;

  // Add a click event listener to the delete button
  row.querySelector(".delete-button").addEventListener("click", function () {
    // Remove the row from the table
    row.remove();

    // Remove the user from the array of users stored in local storage
    users = users.filter(function (u) {
      return u.email !== user.email;
    });