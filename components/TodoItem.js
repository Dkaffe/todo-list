class ToDoItem {
  constructor(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = false;
  }
}

class ToDoItemHandler {
  // Method: Create a new Todo Item
  createToDo(project, title, description, dueDate, priority) {
    const id = Date.now().toString();
    const toDo = new ToDoItem(id, title, description, dueDate, priority);
    project.toDoItems.push(toDo);
  }

  // Method: Update existing Todo Item
  updateToDo(toDo, title, description, dueDate, priority) {
    title ? (toDo.title = title) : toDo.title;
    description ? (toDo.description = description) : toDo.description;
    dueDate ? (toDo.dueDate = dueDate) : toDo.dueDate;
    priority ? (toDo.priority = priority) : toDo.priority;
  }

  // Method: Finish Todo
  finishToDo(toDo) {
    toDo.finished = true;
  }
}

const toDoItemHandler = new ToDoItemHandler();
export { toDoItemHandler };
