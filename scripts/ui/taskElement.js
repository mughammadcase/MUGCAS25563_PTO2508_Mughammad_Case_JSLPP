import { openTaskModal } from "./modalHandlers.js";

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
