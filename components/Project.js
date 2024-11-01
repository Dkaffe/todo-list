class Project {
  constructor(id, title, dueDate, toDoItems) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.toDoItems = toDoItems;
  }
}

class ProjectHandler {
  constructor() {
    // Local storage synched memory for all projects
    this.projects = [];
    if (localStorage.getItem("projects")) {
      const storedProjects = localStorage.getItem("projects");
      this.projects = JSON.parse(storedProjects);
    }
  }

  // Method: Create a new Project
  createProject(title, dueDate) {
    // Simple unique ID
    const id = Date.now().toString();

    // Create new project and push to existing project's [..]
    const project = new Project(id, title, dueDate);
    this.projects.push(project);

    // Update local storage
    const projectJSON = JSON.stringify(this.projects);
    localStorage.setItem("projects", projectJSON);
  }

  // Method: Get existing project
  getProject(id) {
    const project = this.projects.find((project) => project.id === id);
    return project;
  }

  // Method: Delete existing project
  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  // Method: Update existing project
  updateProject(id, title, dueDate) {
    const project = this.projects.find((project) => project.id === id);
    title ? (project.title = title) : project.title;
    dueDate ? (project.dueDate = dueDate) : project.dueDate;
  }

  // Method: Update existing project
  removeToDoFromProject(id, todo) {
    const project = this.getProject(id);
    project.toDoItems = project.toDoItems.filter((item) => item !== todo);
  }
}

const projectHandler = new ProjectHandler();
export { projectHandler };
