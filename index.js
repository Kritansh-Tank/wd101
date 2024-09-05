document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const terms = document.getElementById("terms").checked;

    // Validate age
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 18 || age > 55) {
      alert("Age must be between 18 and 55 years.");
      return;
    }

    const table = document
      .getElementById("userTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${terms}</td>`;

    // Save to localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, password, dob, terms });
    localStorage.setItem("users", JSON.stringify(users));
  });

// Load entries from localStorage
window.onload = function () {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const table = document
    .getElementById("userTable")
    .getElementsByTagName("tbody")[0];
  users.forEach((user) => {
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.password}</td><td>${user.dob}</td><td>${user.terms}</td>`;
  });
};
