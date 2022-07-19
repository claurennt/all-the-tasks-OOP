export default class ToDoItem {
  //public and private property fields

  _text = document.getElementsByName("newTask")[0].value;
  _done = false;
  _date = new Date().toLocaleDateString("DE-de");
  #id = crypto.randomUUID();

  get text() {
    return this._text;
  }

  get id() {
    return this.#id;
  }

  get done() {
    return this._done;
  }

  get date() {
    return this._date;
  }

  getAll() {
    return this;
  }

  changeText(value) {
    this._text = value;
  }

  setDone(value) {
    if (!Boolean(value) === true || !Boolean(value) === false)
      return new Error("Value must be a boolean");
    this._done = Boolean(value);
  }
}
