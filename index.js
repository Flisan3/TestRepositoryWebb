// Konstanter som refererar till klasser och id
const darkModeButton = document.getElementById("darkModeButton");
const moonIcon = document.querySelector(".icon-moon");
const bulbIcon = document.querySelector(".icon-bulb");

// Kontrollera om mörkt läge är sparat i localStorage och tillämpa det
const isDarkSaved = localStorage.getItem("darkMode") === "true";
document.body.classList.toggle("dark-mode", isDarkSaved);
updateIcons(isDarkSaved);

// Lägg till eventlyssnare för mörkt läge-knappen
if (darkModeButton) {
  darkModeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark);
    updateIcons(isDark);
  });
}

// Funktion för att uppdatera ikoner baserat på mörkt läge
function updateIcons(isDark) {
  if (!moonIcon || !bulbIcon) return;

  moonIcon.style.display = isDark ? "none" : "block";
  bulbIcon.style.display = isDark ? "block" : "none";
}

// Uppdatera sidfoten med aktuellt år
const footerYear = document.querySelectorAll(".year");
footerYear.forEach(el => {
  el.textContent = new Date().getFullYear();
});
