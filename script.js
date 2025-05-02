document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Priyanshu's Portfolio!");
  });
  const toggleBtn = document.getElementById("darkModeToggle");

// Load saved mode from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle function
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
