export function initSidebarToggle() {
  const sidebar = document.getElementById("side-bar-div");
  const hideBtn = document.getElementById("hide-sidebar-btn");
  const showBtn = document.getElementById("show-sidebar-btn");

  // Hide sidebar
  hideBtn.addEventListener("click", () => {
    sidebar.classList.add("hidden");
    showBtn.classList.add("visible");
  });

  // Show sidebar
  showBtn.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
    showBtn.classList.remove("visible");
  });
}

const mobileMenu = document.getElementById("mobile-menu-overlay");
const mobileCloseBtn = document.getElementById("mobile-menu-close");
const mobileLogo = document.querySelector(".logo-mobile");

// Open menu
mobileLogo.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Close menu (X button)
mobileCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close when clicking outside
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove("active");
  }
});
