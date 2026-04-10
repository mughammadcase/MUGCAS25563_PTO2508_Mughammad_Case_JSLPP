import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";
import { fetchTasksFromAPI } from "./api/api.js";
import { setupEditTaskHandler } from "./ui/modalHandlers.js";
import { setupDeleteTaskHandler } from "./ui/modalHandlers.js";
import { initThemeToggle } from "./ui/toggle-theme.js";
import { initSidebarToggle } from "./ui/sidebarManager.js";

function showLoading() {
  const container = document.querySelector(".card-column-main");

  // In case function is called multiple times, avoids adding multiple loading messages
  if (!container.querySelector(".loading-msg")) {
    container.insertAdjacentHTML(
      "beforeend", // Loading message is added at end of tasks column
      `<p class="loading-msg">Loading tasks...</p>`,
    );
  }
}

function showError() {
  alert("Fetching tasks failed. Please try again.");
}

document.querySelector(".loading-msg")?.remove();

async function initTaskBoard() {
  try {
    initThemeToggle();
    initSidebarToggle();

    let tasks = loadTasksFromStorage();

    // If no tasks in storage, then fetch from API and save to storage
    if (!tasks.length) {
      showLoading();
      tasks = await fetchTasksFromAPI();
      saveTasksToStorage(tasks);
    }

    clearExistingTasks();
    renderTasks(tasks);

    document.querySelector(".card-column-main p")?.remove();

    // Event handlers

    setupModalCloseHandler();
    setupNewTaskModalHandler();
    setupEditTaskHandler();
    setupDeleteTaskHandler();
  } catch (error) {
    console.error(error);
    showError();
  }
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
