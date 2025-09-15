export const API_URL = "https://to-do-project-backend-q3mc.onrender.com/todos"; // URL da API


let selectedTodoId = null;

export function getSelectedTodoId() {
  return selectedTodoId;
}

export function setSelectedTodoId(id) {
  selectedTodoId = id;
}

