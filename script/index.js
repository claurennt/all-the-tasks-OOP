import ToDoItem from "./ToDoItem.js";

import ToDoList from "./ToDoList.js";
import UI from "./UI.js";

//get the task list ul element

const form = document.forms[0];

window.addEventListener("load", () => {
  UI.renderFromLocalStorage(ToDoList);
  ToDoList.init();
});

// // create new task, append it to the list and reset the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const myTodo = new ToDoItem();

  ToDoList.addNewTask(myTodo, ToDoList.taskList);
  form.reset();
});

window.addEventListener("beforeunload", () => {
  UI.saveTasksToLocalStorage(ToDoList);
});
