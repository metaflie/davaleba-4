document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const todoList = document.getElementById("todo-list");
  const title = document.getElementById("title");

  let isSymbolAdded = false;

  function addTask() {
    let task = taskInput.value.trim();
    if (task === "") return;

    let listItem = document.createElement("li");
    listItem.textContent = task;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    taskInput.value = "";

    listItem.addEventListener("click", function () {
      if (!isSymbolAdded) {
        listItem.innerHTML = `√ ${listItem.innerHTML}`;
        isSymbolAdded = true;
      }
    });
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  todoList.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      }
    },
    false
  );

  title.addEventListener("click", function () {
    if (!isSymbolAdded) {
      title.innerHTML = `√ ${title.innerHTML}`;
      isSymbolAdded = true;
    }
  });
});
