class DOMController {
  constructor(root) {
    this.root = root;
    this.articles = [];
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

      // Render todo items
      const ul = document.createElement("ul");
      if (!project.toDoItems[0]) {
        const li = document.createElement("li");
        li.innerText = "No todos!";
        ul.appendChild(li);
      }
      for (const task in project.toDoItems) {
        const li = document.createElement("li");
        li.innerText = project.toDoItems[task].title;
        project.toDoItems[task].finished ? (li.style.textDecoration = "line") : li;
        ul.appendChild(li);
      }

      // Button to Create new Todo Items
      const button = document.createElement("button");
      button.innerText = "+";

      // Append children
      article.appendChild(h3);
      article.appendChild(h4);
      article.appendChild(ul);
      article.appendChild(button);

      this.root.appendChild(article);
      this.articles.push(article);
    }
  }

  //   Method to expand an article / project
  // Likely refactor for todos or add expaned view here
  expandArticleFlag(flag) {
    if (flag) {
      const articles = this.articles;

      for (const article of articles) {
        article.addEventListener("click", (e) => {
          article.style.backgroundColor === "red"
            ? (article.style.backgroundColor = "white")
            : (article.style.backgroundColor = "red");
        });
      }
    }
    return;
  }
}

export default DOMController;
