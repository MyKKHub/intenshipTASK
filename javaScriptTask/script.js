document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const dueDateInput = document.getElementById("dueDate");
  const prioritySelect = document.getElementById("priority");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTask");
  const filterSelect = document.getElementById("filter");
  const addedTaskList = document.getElementById("addedTaskList");

  addTaskButton.addEventListener("click", function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;

    if (taskText === "") {
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item";
    taskItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <span class="due-date">${dueDate}</span>
      <span class="priority-level">${priority}</span>
      <button class="complete btn btn-success">Complete</button>
      <button class="edit btn btn-primary">Edit</button>
      <button class="delete btn btn-danger">Delete</button>
      <button class="important btn btn-warning">Important</button>
    `;

    const addedTaskItem = document.createElement("li");
    addedTaskItem.className = "list-group-item";
    addedTaskItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <span class="due-date">${dueDate}</span>
    `;

    taskList.appendChild(taskItem);
    addedTaskList.appendChild(addedTaskItem);

    taskInput.value = "";
    dueDateInput.value = "";
    prioritySelect.value = "normal";

    taskItem.querySelector(".delete").addEventListener("click", function () {
      taskList.removeChild(taskItem);
      addedTaskList.removeChild(addedTaskItem);
      updateFilter();
    });

    taskItem.querySelector(".complete").addEventListener("click", function () {
      taskItem.classList.toggle("completed");
      addedTaskItem.classList.toggle("completed");
      updateFilter();
    });

    taskItem.querySelector(".edit").addEventListener("click", function () {
      const taskTextElement = taskItem.querySelector(".task-text");
      const editedText = prompt("Edit task:", taskTextElement.innerText);
      if (editedText !== null) {
        taskTextElement.innerText = editedText;
        addedTaskItem.querySelector(".task-text").innerText = editedText;
      }
    });

    taskItem.querySelector(".important").addEventListener("click", function () {
      taskItem.classList.toggle("important-task");
      addedTaskItem.classList.toggle("important-task");
      updateFilter();
    });

    updateFilter();
  });

  function updateFilter() {
    const selectedOption = filterSelect.value;

    Array.from(taskList.children).forEach((taskItem) => {
      taskItem.style.display = "block";

      if (selectedOption === "active" && (taskItem.classList.contains("completed") || taskItem.classList.contains("important-task"))) {
        taskItem.style.display = "none";
      } else if (selectedOption === "completed" && (!taskItem.classList.contains("completed") || taskItem.classList.contains("important-task"))) {
        taskItem.style.display = "none";
      }
    });
  }

  filterSelect.addEventListener("change", updateFilter);
});

