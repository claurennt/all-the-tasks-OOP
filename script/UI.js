export default class UI {
  //retrieves saved tasks from local storage
  static render(list) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    list.innerHTML = savedTasks;
  }

  //saves the tasks to local storage
  static saveTasksToLocalStorage(list) {
    localStorage.setItem("tasks", JSON.stringify(list.innerHTML));
  }
}
