const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission
  loginAdmin();
});

function loginAdmin() {
  let username = document.getElementById("inputUserName").value;
  let password = document.getElementById("inputPassword").value;

  if (username === "admino" && password === "d93m") {
      window.location.href = "dash-officials.html";
  } else if (username === "admin2" && password === "456") {
      window.location.href = "result.html"; // Corrected filename
  } else {
      alert("Invalid username or password");
  }
}
