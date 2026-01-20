function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById("darkModeButton").addEventListener("click", toggleDarkMode);

const footerYear = document.querySelectorAll(".year");
  footerYear.forEach(copyright => {
    copyright.innerHTML = new Date().getFullYear();
  });
