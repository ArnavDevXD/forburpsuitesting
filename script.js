document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Dummy credentials check
  if (email === "admin@example.com" && password === "password123") {
    document.getElementById("msg").innerText = "Login successful!";
  } else {
    document.getElementById("msg").innerText = "Invalid email or password.";
  }
});
