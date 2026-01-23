const darkModeButton = document.getElementById("darkModeButton");
const moonIcon = document.querySelector(".icon-moon");
const bulbIcon = document.querySelector(".icon-bulb");

const isDarkSaved = localStorage.getItem("darkMode") === "true";
document.body.classList.toggle("dark-mode", isDarkSaved);
updateIcons(isDarkSaved);

if (darkModeButton) {
  darkModeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark);
    updateIcons(isDark);
  });
}

function updateIcons(isDark) {
  if (!moonIcon || !bulbIcon) return;

  moonIcon.style.display = isDark ? "none" : "block";
  bulbIcon.style.display = isDark ? "block" : "none";
}

const footerYear = document.querySelectorAll(".year");
footerYear.forEach(el => {
  el.textContent = new Date().getFullYear();
});
