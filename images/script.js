document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Check if the username and password match the stored registration data
  var registrationData = JSON.parse(localStorage.getItem("registrationData"));
  if (registrationData && registrationData[username] === password) {
    alert("Login successful!");
    // Redirect to another page or perform any desired action
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password for registration
  var username = document.getElementById("registrationUsername").value;
  var password = document.getElementById("registrationPassword").value;

  // Store the registration data in local storage
  var registrationData = JSON.parse(localStorage.getItem("registrationData")) || {};
  registrationData[username] = password;
  localStorage.setItem("registrationData", JSON.stringify(registrationData));

  alert("Registration successful! Username: " + username);
  // You can redirect to the login page or perform any other desired action after registration
});
