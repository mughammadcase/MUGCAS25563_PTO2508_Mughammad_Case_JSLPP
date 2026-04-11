import { addNewTask } from "../tasks/taskManager.js";
import { updateTask } from "../tasks/taskManager.js";
import { loadTasksFromStorage } from "../utils/localStorage.js";
import { deleteTask } from "../tasks/taskManager.js";

let currentEditTaskId = null;

/**
 * Sets up the event listener for the modal close button
 */
export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
}

/**
 * Sets up the event listener for the "Add New Task" button to open the new task modal
 */
export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  // Closes the modal when the cancel button is clicked
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

/**
 * Opens the task modal and populates it with the tasks details for editing
 * @param {Object} task - The task object to be edited
 */
export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");

  // Sets currentEditTaskId to the task being edited
  currentEditTaskId = task.id;

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  document.getElementById("task-priority").value = task.priority || "low";

  modal.showModal();
}

/**
 * Handles the form submission for editing a task
 * @param {Event} e - The event object from the form submission
 */
function handleEditSubmit(e) {
  e.preventDefault(); // e meaning event object, prevents default form submit/page reload

  const tasks = loadTasksFromStorage();

  // Finds the existing task being edited using currentEditTaskId
  const existingTask = tasks.find((t) => t.id === currentEditTaskId); // t meaning task

  if (!existingTask) return;

  const updatedTask = {
    ...existingTask,
    title: document.getElementById("task-title").value.trim(),
    description: document.getElementById("task-desc").value.trim(),
    status: document.getElementById("task-status").value,
    priority: document.getElementById("task-priority").value,
  };

  updateTask(updatedTask);

  document.getElementById("task-modal").close();
}

/**
 * Sets up the event listener for the edit task form submission
 */
export function setupEditTaskHandler() {
  const form = document.getElementById("task-form");

  form.addEventListener("submit", handleEditSubmit);
}

/**
 * Handles the deletion of a task
 */
function handleDeleteTask() {
  if (currentEditTaskId === null) return;

  const confirmDelete = confirm("Are you sure you want to delete this task?");

  if (!confirmDelete) return;

  deleteTask(currentEditTaskId);

  document.getElementById("task-modal").close();

  currentEditTaskId = null;
}

/**
 * Sets up the event listener for the delete task button in the edit modal
 */
export function setupDeleteTaskHandler() {
  const deleteBtn = document.getElementById("delete-task-btn");

  deleteBtn.addEventListener("click", handleDeleteTask);
}
