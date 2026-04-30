import "./styles.css";

let todoList = document.getElementById("todo-list");
let addTodoButton = document.getElementById("submit-todo-item");

addTodoButton.addEventListener("click", (e) => {
  e.preventDefault();

  // grab to do list elements and extract their values into variables
  let todoItemName = document.getElementById("task-name").value;
  let todoItemDueDate = document.getElementById("task-due-date").value;

  // create elements in the document (div and delete button)
  let divItemName = document.createElement("div");
  let divItemDueDate = document.createElement("div");
  let divItemContainer = document.createElement("div");
  let divItemDeleteButton = document.createElement("button");

  // assign each created element an id to use in css
  divItemContainer.id = "div-item-container";
  divItemName.id = "div-item-name";
  divItemDueDate.id = "div-item-due-date";
  divItemDeleteButton.id = "div-item-delete-button";

  // set the inner text information
  // to the data we grabbed in the form elements above
  divItemDueDate.innerText = todoItemDueDate;
  divItemName.innerText = todoItemName;
  divItemDeleteButton.innerText = "REMOVE";

  // add event listener to delete button
  // so when it is clicked the divItemContainer is removed
  divItemDeleteButton.addEventListener("click", () => {
    divItemContainer.remove();
  });

  // append these to the div container element we created above
  divItemContainer.appendChild(divItemName);
  divItemContainer.appendChild(divItemDueDate);
  divItemContainer.appendChild(divItemDeleteButton);

  // append the div item container to the div container
  // we made in ./src/template.html
  todoList.appendChild(divItemContainer);
});
