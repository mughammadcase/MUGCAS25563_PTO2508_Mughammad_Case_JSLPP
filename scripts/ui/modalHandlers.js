import { addNewTask } from "../tasks/taskManager.js";
import { updateTask } from "../tasks/taskManager.js";
import { loadTasksFromStorage } from "../utils/localStorage.js";
import { deleteTask } from "../tasks/taskManager.js";

let currentEditTaskId = null;

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
}

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      addNewTask();
    } else {
      form.reportValidity();
    }
  });
}

export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");

  // Sets currentEditTaskId to the task being edited
  currentEditTaskId = task.id;

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

  modal.showModal();
}

function handleEditSubmit(e) {
  e.preventDefault();

  const tasks = loadTasksFromStorage();

  // Finds the existing task being edited using currentEditTaskId
  const existingTask = tasks.find((t) => t.id === currentEditTaskId);

  if (!existingTask) return;

  const updatedTask = {
    ...existingTask,
    title: document.getElementById("task-title").value.trim(),
    description: document.getElementById("task-desc").value.trim(),
    status: document.getElementById("task-status").value,
  };

  updateTask(updatedTask);

  document.getElementById("task-modal").close();
}

export function setupEditTaskHandler() {
  const form = document.getElementById("task-form");

  form.addEventListener("submit", handleEditSubmit);
}

function handleDeleteTask() {
  if (currentEditTaskId === null) return;

  const confirmDelete = confirm("Are you sure you want to delete this task?");

  if (!confirmDelete) return;

  deleteTask(currentEditTaskId);

  document.getElementById("task-modal").close();

  currentEditTaskId = null;
}

export function setupDeleteTaskHandler() {
  const deleteBtn = document.getElementById("delete-task-btn");

  deleteBtn.addEventListener("click", handleDeleteTask);
}
