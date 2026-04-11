import { createTaskElement } from "./taskElement.js";
import { sortTasksByPriority } from "./prioritySorter.js";

/**
 * Finds the task container element based on task status.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders tasks to their appropriate columns.
 */
export function renderTasks(tasks) {
  const groupedTasks = {
    todo: [],
    doing: [],
    done: [],
  };

  // Group tasks by status
  tasks.forEach((task) => {
    if (groupedTasks[task.status]) {
      groupedTasks[task.status].push(task);
    }
  });

  // Sort each group by priority and render
  Object.keys(groupedTasks).forEach((status) => {
    const container = getTaskContainerByStatus(status);

    if (!container) return;

    const sortedTasks = sortTasksByPriority(groupedTasks[status]);

    sortedTasks.forEach((task) => {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    });
  });
}
