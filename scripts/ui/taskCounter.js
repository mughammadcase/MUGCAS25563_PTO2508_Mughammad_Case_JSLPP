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
