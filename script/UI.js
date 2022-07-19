export default class UI {
  //retrieves saved tasks from local storage
  static getTasksFromLocalStorage(ToDoList) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    ToDoList.taskList.innerHTML = savedTasks;
  }

  static renderFromLocalStorage(ToDoList) {
    this.getTasksFromLocalStorage(ToDoList);
  }

  static saveTasksToLocalStorage(ToDoList) {
    localStorage.setItem("tasks", JSON.stringify(ToDoList.taskList.innerHTML));
  }
}
