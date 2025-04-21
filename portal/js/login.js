
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const pw = document.getElementById('password').value.trim();
    const msg = document.getElementById('message');

    if (email === "test@paramed.org" && pw === "tsp123") {
      window.location.href = "dashboard.html";
    } else {
      msg.textContent = "Invalid credentials. Please try again.";
    }
  });
});
