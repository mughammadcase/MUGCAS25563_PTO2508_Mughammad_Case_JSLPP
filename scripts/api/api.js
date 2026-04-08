/**
 * Fetch tasks from external API
 * @returns {Promise<Array>} Array of task objects
 */
export async function fetchTasksFromAPI() {
  const response = await fetch("https://jsl-kanban-api.vercel.app/");

  if (!response.ok) {
    throw new Error("Failed to fetch tasks from API");
  }

  const data = await response.json();

  // Arrange API data to task format
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    status: item.completed ? "done" : "todo",
  }));
}
