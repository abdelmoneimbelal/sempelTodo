const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

function createTaskElement(text) {
  const taskEl = document.createElement("li");
  taskEl.className = "task";
  taskEl.textContent = text;

  const deleteBtn = document.createElement("span");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskEl);
  });

  taskEl.addEventListener("click", () => {
    taskEl.classList.toggle("task-done");
  });

  taskEl.appendChild(deleteBtn);
  return taskEl;
}