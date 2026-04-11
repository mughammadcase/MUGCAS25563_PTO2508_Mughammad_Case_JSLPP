/**
 * Initializes the sidebar toggle functionality for both desktop and mobile views
 */
export function initSidebarToggle() {
  const sidebar = document.getElementById("side-bar-div");
  const hideBtn = document.getElementById("hide-sidebar-btn");
  const showBtn = document.getElementById("show-sidebar-btn");

  hideBtn.addEventListener("click", () => {
    sidebar.classList.add("hidden");
    showBtn.classList.add("visible");
  });

  showBtn.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
    showBtn.classList.remove("visible");
  });

  const mobileMenu = document.getElementById("mobile-menu-overlay");
  const mobileCloseBtn = document.getElementById("mobile-menu-close");
  const mobileLogo = document.querySelector(".logo-mobile");

  if (mobileLogo && mobileMenu && mobileCloseBtn) {
    mobileLogo.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    mobileCloseBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }
}
