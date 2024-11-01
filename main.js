import { projectHandler } from "./components/Project.js";
import { toDoItemHandler } from "./components/TodoItem.js";
import DOMController from "./dom-controller.js";

const createProjectButton = document.querySelector(".new-project");
createProjectButton.addEventListener("click", () => {
  projectHandler.createProject("Hello, world", "Tomorrow");
  location.reload();
});

// Control API
const projectController = new DOMController(document.querySelector(".projects-container"));
const projects = projectHandler.getAllProjects();

projectController.renderProjects(projects);

// LOCAL STORAGE CLEANER
const localStorageButton = document.querySelector("#local");
localStorageButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
