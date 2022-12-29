class ToDoModel {
  id
  title
  completed

  constructor(id, title, completed = false) {
    this.id = id
    this.title = title
    this.completed = completed
  }

  toggleCompleted = () => {
    this.completed = !this.completed
  }

  updateTitle = (title) => {
    this.title = title
  }

  get id() {
    return this.id
  }
}

export default ToDoModel
