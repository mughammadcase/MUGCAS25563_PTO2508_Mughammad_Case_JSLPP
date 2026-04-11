import { openTaskModal } from "./modalHandlers.js";

/**
 * Creates a task element for the task board.
 * @param {Object} task - The task object containing task details
 * @returns {HTMLElement} - The created task element
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  // Priority Dot
  const priorityDot = document.createElement("span");

  const priority = task.priority || "low";

  if (priority === "high") {
    priorityDot.textContent = "🔴";
  } else if (priority === "medium") {
    priorityDot.textContent = "🟠";
  } else {
    priorityDot.textContent = "🟢";
  }

  priorityDot.className = "priority-indicator";

  taskDiv.appendChild(priorityDot);

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}
