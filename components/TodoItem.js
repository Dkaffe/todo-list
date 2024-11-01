class ToDoItem {
  constructor(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class ToDoItemHandler {
  // Method: Create a new Todo Item
  createToDo(title, description, dueDate, priority) {
    const id = Date.now().toString();
    const toDo = new ToDoItem(id, title, description, dueDate, priority);
    return toDo;
  }

  // Method: Update existing Todo Item
  updateToDo(toDo, title, description, dueDate, priority) {
    toDo.title = title;
    toDo.description = description;
    toDo.dueDate = dueDate;
    toDo.priority = priority;
  }
}
