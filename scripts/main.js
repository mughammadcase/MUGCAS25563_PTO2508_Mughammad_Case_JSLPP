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
import { updateTaskCounter } from "./ui/taskCounter.js";

function showLoading() {
  const container = document.querySelector(".card-column-main");

  // Prevent duplicates
  if (!document.querySelector(".loading-msg")) {
    const loadingEl = document.createElement("p");
    loadingEl.className = "loading-msg";
    loadingEl.textContent = "Loading tasks...";
    container.appendChild(loadingEl);
  }
}

function removeLoading() {
  const loadingEl = document.querySelector(".loading-msg");
  if (loadingEl) loadingEl.remove();
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
    updateTaskCounter(tasks);

    removeLoading();

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
