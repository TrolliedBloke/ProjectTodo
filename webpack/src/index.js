import "./styles.css";

let todoList = document.getElementById("todo-list");
let addTodoButton = document.getElementById("submit-todo-item");

let savedTodos = localStorage.getItem("todos");
let todos = savedTodos ? JSON.parse(savedTodos) : [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    // create elements in the document (div and delete button)    let divItemName = document.createElement("div");
    let divItemDueDate = document.createElement("div");
    let divItemContainer = document.createElement("div");
    let divItemDeleteButton = document.createElement("button");

    // giving each created element a class name for css
    divItemContainer.className = "div-item-container";
    divItemName.className = "div-item-name";
    divItemDueDate.className = "div-item-due-date";
    divItemDeleteButton.className = "div-item-delete-button";

    // settings the new elements data from the todo form
    divItemName.innerText = todo.name;
    divItemDueDate.innerText = todo.dueDate;
    divItemDeleteButton.innerText = "REMOVE";

    // added event listener for delete button
    divItemDeleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    // appending new items to the div container
    divItemContainer.appendChild(divItemName);
    divItemContainer.appendChild(divItemDueDate);
    divItemContainer.appendChild(divItemDeleteButton);

    // appending div container to container we made in html
    todoList.appendChild(divItemContainer);
  });
}

// create todo list object to convert to json
addTodoButton.addEventListener("click", (e) => {
  e.preventDefault();

  let todoItemName = document.getElementById("task-name").value;
  let todoItemDueDate = document.getElementById("task-due-date").value;

  // push to array we created
  let newTodo = {
    name: todoItemName,
    dueDate: todoItemDueDate,
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();

  document.getElementById("task-name").value = "";
  document.getElementById("task-due-date").value = "";
});

renderTodos();
