/**
 * Initializes the theme toggle functionality, allowing theme to switch between light and dark modes
 */
export function initThemeToggle() {
  const toggleBtns = document.querySelectorAll(".theme-toggle");
  const body = document.body;
  const logo = document.getElementById("logo");

  const savedTheme = localStorage.getItem("theme");

  // Apply saved theme on load
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    logo.src = "./assets/logo-dark.svg";
    toggleBtns.forEach((btn) => btn.classList.add("active"));
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-mode");

      // Save theme to localStorage
      localStorage.setItem("theme", isDark ? "dark" : "light");

      // Change logos based on the theme
      if (isDark) {
        logo.src = "./assets/logo-dark.svg";
      } else {
        logo.src = "./assets/logo-light.svg";
      }

      // Toggles active class on all theme toggle buttons to reflect the current theme state
      toggleBtns.forEach((toggle) => {
        toggle.classList.toggle("active", isDark);
      });
    });
  });
}
