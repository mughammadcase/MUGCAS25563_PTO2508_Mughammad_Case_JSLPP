import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";
import { fetchTasksFromAPI } from "./api/api.js";

function showLoading() {
  const container = document.querySelector(".card-column-main");
  container.insertAdjacentHTML("afterbegin", "<p>Loading tasks...</p>");
}

function showError() {
  alert("Fetching tasks failed. Please try again.");
}

async function initTaskBoard() {
  try {
    showLoading();

    const tasks = await fetchTasksFromAPI();

    clearExistingTasks();
    renderTasks(tasks);

    document.querySelector(".card-column-main p")?.remove();

    setupModalCloseHandler();
    setupNewTaskModalHandler();
  } catch (error) {
    console.error(error);
    showError();
  }
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
