/**
 * Sort tasks based on priority (High, Medium, Low)
 * @param {Array<Object>} tasks - The array of task objects to be sorted
 * @returns {Array<Object>} - A new array of tasks sorted by priority
 */
export function sortTasksByPriority(tasks) {
  const priorityOrder = {
    high: 0,
    medium: 1,
    low: 2,
  };

  // Returns a new array sorted by priority
  return [...tasks].sort((a, b) => {
    return (
      priorityOrder[a.priority || "low"] - priorityOrder[b.priority || "low"]
    );
  });
}
