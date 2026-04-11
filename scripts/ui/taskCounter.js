/**
 * Updates the task counters for each status (TODO, DOING, DONE)
 * @param {Array<Object>} tasks - The array of task objects to be counted
 */
export function updateTaskCounter(tasks) {
  const counts = {
    todo: 0,
    doing: 0,
    done: 0,
  };

  tasks.forEach((task) => {
    counts[task.status]++;
  });

  document.getElementById("toDoText").textContent = `TODO (${counts.todo})`;
  document.getElementById("doingText").textContent = `DOING (${counts.doing})`;
  document.getElementById("doneText").textContent = `DONE (${counts.done})`;
}
