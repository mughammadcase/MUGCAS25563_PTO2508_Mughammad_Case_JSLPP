export function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const body = document.body;
  const logo = document.getElementById("logo");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    logo.src = "./assets/logo-dark.svg";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");

    // Save theme to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (isDark) {
      logo.src = "./assets/logo-dark.svg";
    } else {
      logo.src = "./assets/logo-light.svg";
    }
  });
}
