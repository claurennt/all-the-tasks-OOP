export default class ToDoList {
  static listItems = document.querySelectorAll(".taskText");
  static taskList = document.querySelector(".taskList");

  static tasks = [];

  static init() {
    console.log(this.listItems);
    this.attachBlurEventToListItems();
    this.delegateEvents();
  }
  //blur events do not bubble up so we need to attach them to each element
  static attachBlurEventToListItems() {
    //binds blur event to each list item ,
    this.listItems.forEach((element) =>
      element.addEventListener("blur", this.removeContentEditable)
    );
  }

  static returnAllTasks() {
    return this.tasks;
  }

  static addNewTask(value, list) {
    this.tasks.push(value);
    this.displayTask(list);
  }

  //function that creates a new task element and inserts it into the html
  static displayTask(list) {
    const newAddedTask = this.tasks[this.tasks.length - 1];
    const { text, done, date, id } = newAddedTask;

    const newTaskTemplate = `
       <li id=${id} class="mb-4 d-flex justify-content-center align-items-center new-task ${
      done ? "checked" : ""
    }">
      <p class="taskText mb-0">${text}</p> <span>created on ${date}</span><i class="bi bi-pencil" name="edit"></i><i class="bi bi-check-lg" name="check"></i><i class="bi bi-x-lg" name="delete"></i>
      </li>`;
    list.insertAdjacentHTML("afterBegin", newTaskTemplate);

    //binds blur event on newly created paragraph
    const taskTextParagraph = document.querySelector(".taskText");
    taskTextParagraph.addEventListener("blur", this.removeContentEditable);
  }

  static makeContentEditable(e) {
    //retrieves the paragraph element
    const paragraph = e.target.closest("li").querySelector("p");

    //adds a class to the list item
    paragraph.parentElement.classList.add("editing");
    //makes the paragraph editable
    paragraph.contentEditable = true;
  }

  static removeContentEditable(e) {
    console.log("here");
    e.target.parentElement.classList.remove("editing");
    e.target.contentEditable = false;
  }
  static toggleChecked(e) {
    e.target.parentElement.classList.toggle("checked");
  }

  static removeTaskFromDom(e) {
    e.target.parentElement.remove();
  }

  //event delegation with listener attached to parent
  static delegateEvents() {
    this.taskList.addEventListener("click", (e) => {
      const targetName = e.target.getAttribute("name");

      if (targetName === "delete") this.removeTaskFromDom(e);

      if (targetName === "check") this.toggleChecked(e);

      if (targetName === "edit") this.makeContentEditable(e);
    });
  }
}
