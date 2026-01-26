// Select DOM elements
const toggleBtn = document.getElementById("toggleThemeBtn");
const aboutText = document.getElementById("aboutText");
const body = document.body;

// Handle button click event
toggleBtn.addEventListener("click", () => {

    // Toggle a CSS class on body to change theme
    body.classList.toggle("dark-theme");

    // Modify text dynamically
    if (body.classList.contains("dark-theme")) {
        aboutText.textContent = "Dark mode enabled. Enjoy the new theme!";
    } else {
        aboutText.textContent = "Hello! I am Prem Patil, a computer science student passionate about web development and building full stack applications.";
    }

    // Debug log in console
    console.log("Theme toggled");
});
