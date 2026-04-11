/**
 * Sort tasks by priority (High → Medium → Low)
 * @param {Array<Object>} tasks
 * @returns {Array<Object>}
 */
export function sortTasksByPriority(tasks) {
  const priorityOrder = {
    high: 0,
    medium: 1,
    low: 2,
  };

  return [...tasks].sort((a, b) => {
    return (
      priorityOrder[a.priority || "low"] - priorityOrder[b.priority || "low"]
    );
  });
}
