/**
 * Resets the task form inputs to default values
 */
export function resetForm() {
  document.getElementById("title-input").value = "";
  document.getElementById("desc-input").value = "";
  document.getElementById("select-status").value = "todo";
}
