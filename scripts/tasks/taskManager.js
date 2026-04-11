import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";
import { updateTaskCounter } from "../ui/taskCounter.js";

/**
 * Adds a new task then saved to localStorage, re-renders the task board, and resets the task form
 * @param {string} title - The title of the new task
 * @param {string} description - The description of the new task
 * @param {string} status - The status of the new task
 * @param {string} priority - The priority of the new task
 * @returns {void}
 */
export function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");
  const priority = document.getElementById("select-priority").value;

  if (!title) return;

  const tasks = loadTasksFromStorage();

  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
    priority,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  updateTaskCounter(updatedTasks);

  resetForm();
  overlay.close();
}

/***
 * Updates an existing task with new values, saves to localStorage, and re-renders the task board
 * @param {Object} updatedTask - The task object with updated values
 */
export function updateTask(updatedTask) {
  const tasks = loadTasksFromStorage();

  const updatedTasks = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task,
  );

  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  updateTaskCounter(updatedTasks);
}

/**
 * Deletes a task by its ID, saves the updated task list to localStorage, and re-renders the task board
 * @param {number} taskId - The ID of the task to delete
 */
export function deleteTask(taskId) {
  const tasks = loadTasksFromStorage();

  const updatedTasks = tasks.filter((task) => task.id !== taskId);

  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  updateTaskCounter(updatedTasks);
}
