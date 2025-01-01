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
  } else if (username === "admina" && password === "v58s") {
      window.location.href = "dash-admins.html"; // Corrected filename
  }else if (username === "adminl"  && password === "h30i"){
    window.location.href = "dash-leaders.html";
  }
   else {
      alert("Invalid username or password");
  }
}
