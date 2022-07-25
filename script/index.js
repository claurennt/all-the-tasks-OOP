import ToDoItem from "./ToDoItem.js";

import ToDoList from "./ToDoList.js";
import UI from "./UI.js";

//get the task list ul element

const form = document.forms[0];

const myList = new ToDoList();
window.addEventListener("load", () => {
  UI.render(myList.taskList);
  const taskParagraphs = document.querySelectorAll("p.taskText");
  myList.attachBlurEventToListItems(taskParagraphs);
});

// // create new task, append it to the list and reset the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const myTodo = new ToDoItem();

  myList.addNewTask(myTodo, myList.taskList);
  form.reset();
});

window.addEventListener("beforeunload", () => {
  UI.saveTasksToLocalStorage(document.querySelector(".taskList"));
});
