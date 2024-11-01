class DOMController {
  constructor(root) {
    this.root = root;
  }

  renderProjects(projects) {
    for (const project of projects) {
      // Article container element for project content
      const article = document.createElement("article");
      article.classList.add("project");

      // h3 for the project name
      const h3 = document.createElement("h3");
      h3.innerText = project.title;

      // h4 todo heading
      const h4 = document.createElement("h4");
      h4.innerText = "Todos";

      // ToDoItems
      const ul = document.createElement("ul");
      for (const task in project.toDoItems) {
        const li = document.createElement("li");
        li.innerText = project.toDoItems[task].title;
        project.toDoItems[task].finished ? (li.style.textDecoration = "line") : li;
        ul.appendChild(li);
      }

      // Append children
      article.appendChild(h3);
      article.appendChild(h4);
      article.appendChild(ul);

      this.root.appendChild(article);
    }
  }
}

export default DOMController;
