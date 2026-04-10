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
