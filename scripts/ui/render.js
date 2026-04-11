import { createTaskElement } from "./taskElement.js";
import { sortTasksByPriority } from "./prioritySorter.js";

/**
 * Finds the task container element based on task status.
 * @param {string} status - The status of the task (todo, doing, done)
 * @returns {HTMLElement|null} - The task container element or null if not found
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing tasks from the task board by emptying the innerHTML of task containers.
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders the given array of taks onto the task board, grouping by status and sorting by priority
 * @param {Array<Object>} tasks - The array of task objects to be rendered
 */
export function renderTasks(tasks) {
  const groupedTasks = {
    todo: [],
    doing: [],
    done: [],
  };

  // Group tasks by their status
  tasks.forEach((task) => {
    if (groupedTasks[task.status]) {
      groupedTasks[task.status].push(task);
    }
  });

  // Goes through each status group, finds the corresponding container, sorts tasks by priority, and append it to the DOM
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
