let tasks = [];

function taskTemplate(task) {
  return `
  <li ${task.completed ? 'class="strike"' : ""}>
    <p>${task.detail}</p>
    <div>
      <span data-action="delete">❎</span>
      <span data-action="complete">✅</span>
    </div>
  </li>`;
}

function renderTasks(tasks) {
  const listElement = document.querySelector('#todoList');
  listElement.innerHTML = "";
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
  // get the list element from the DOM
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
}


function newTask() {
  const task = document.querySelector('#todo').value;
  if (task.trim() === "") return;  // Evitar agregar tareas vacías
  tasks.push({ detail: task, completed: false });
  renderTasks(tasks);
  // get the value entered into the #todo input
  // add it to our arrays tasks
  // render out the list
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail !== taskElement.querySelector('p').innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  const parent = event.target.closest("li");
  if (event.target.dataset.action === "delete") {
    removeTask(parent);
  }
  if (event.target.dataset.action === "complete") {
    completeTask(parent);
  }
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

  // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
}


// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
// render  the initial list of tasks (if any) when the page loads
renderTasks(tasks);
