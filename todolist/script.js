// Define Todo class
class Todo {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}

// Define Project class
class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
}

// Application logic
let projects = []; // Array to store projects

// Function to save projects to localStorage
function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

// Function to retrieve projects from localStorage
function retrieveProjects() {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) {
    projects = JSON.parse(storedProjects);
  }
}

// Helper functions
function renderProjects() {
  const projectsContainer = document.getElementById("projects");
  projectsContainer.textContent = "";

  projects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);
    projectsContainer.appendChild(projectCard);

    projectCard.addEventListener("click", () => {
      renderTodos(index);
    });
  });
}

function createProjectCard(project, index) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("card", "project-card");
  projectCard.dataset.index = index;

  const projectTitle = document.createElement("h3");
  projectTitle.classList.add("card-title");
  projectTitle.textContent = project.name;

  projectCard.appendChild(projectTitle);

  return projectCard;
}

function renderTodos(projectIndex) {
  const todosContainer = document.getElementById("todos");
  todosContainer.textContent = "";

  if (projects[projectIndex]) {
    projects[projectIndex].todos.forEach((todo, index) => {
      const todoCard = createTodoCard(todo, projectIndex, index);
      todosContainer.appendChild(todoCard);
    });
  }
}

function createTodoCard(todo, projectIndex, todoIndex) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("card", "todo-card");
  todoCard.dataset.projectIndex = projectIndex;
  todoCard.dataset.todoIndex = todoIndex;

  const todoTitle = document.createElement("h3");
  todoTitle.classList.add("card-title");
  todoTitle.textContent = todo.title;

  const todoDueDate = document.createElement("p");
  todoDueDate.classList.add("card-details", "due-date");
  todoDueDate.textContent = `Due Date: ${todo.dueDate}`;

  const todoPriority = document.createElement("p");
  todoPriority.classList.add("card-details", "priority");
  todoPriority.textContent = `Priority: ${todo.priority}`;

  todoCard.appendChild(todoTitle);
  todoCard.appendChild(todoDueDate);
  todoCard.appendChild(todoPriority);

  todoCard.addEventListener("click", () => {
    renderTodoDetails(projectIndex, todoIndex);
  });

  return todoCard;
}

function renderTodoDetails(projectIndex, todoIndex) {
  const todo = projects[projectIndex].todos[todoIndex];

  document.getElementById("todo-details-title").textContent = todo.title;
  document.getElementById("todo-details-description").textContent =
    todo.description;
  document.getElementById("todo-details-due-date").textContent = todo.dueDate;
  document.getElementById("todo-details-priority").textContent = todo.priority;
  document.getElementById("todo-details-notes").textContent = todo.notes;

  const checklist = document.getElementById("todo-details-checklist");
  checklist.textContent = "";

  todo.checklist.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    checklist.appendChild(listItem);
  });

  document.getElementById("delete-todo").addEventListener("click", () => {
    deleteTodoFromProject(projectIndex, todoIndex);
  });

  showTodoDetails();
}

function deleteTodoFromProject(projectIndex, todoIndex) {
  projects[projectIndex].todos.splice(todoIndex, 1);
  hideTodoDetails();
  renderTodos(projectIndex);
  saveProjects(); // Save updated projects to localStorage
}

function showTodoDetails() {
  document.getElementById("todo-details").classList.remove("hide");
}

function hideTodoDetails() {
  document.getElementById("todo-details").classList.add("hide");
}

// Event listeners
document.getElementById("new-project-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const projectNameInput = document.getElementById("project-name");
  const projectName = projectNameInput.value.trim();

  if (projectName !== "") {
    const project = new Project(projectName);
    projects.push(project);

    renderProjects();
    projectNameInput.value = "";

    saveProjects(); // Save projects to localStorage
  }
});

document.getElementById("new-todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const todoTitleInput = document.getElementById("todo-title");
  const todoDescriptionInput = document.getElementById("todo-description");
  const todoDueDateInput = document.getElementById("todo-due-date");
  const todoPriorityInput = document.getElementById("todo-priority");

  const todoTitle = todoTitleInput.value.trim();
  const todoDescription = todoDescriptionInput.value.trim();
  const todoDueDate = todoDueDateInput.value;
  const todoPriority = todoPriorityInput.value;

  const currentProjectIndex =
    document.getElementById("projects").querySelector(".project-card.selected")
      ?.dataset.index || 0;
  const currentProject = projects[currentProjectIndex];

  if (todoTitle !== "") {
    const todo = new Todo(
      todoTitle,
      todoDescription,
      todoDueDate,
      todoPriority,
      "",
      []
    );
    currentProject.todos.push(todo);

    renderTodos(currentProjectIndex);
    todoTitleInput.value = "";
    todoDescriptionInput.value = "";
    todoDueDateInput.value = "";
    todoPriorityInput.value = "high";

    saveProjects(); // Save projects to localStorage
  }
});

// Initial rendering and data retrieval
retrieveProjects(); // Retrieve projects from localStorage
renderProjects();
renderTodos(0);
