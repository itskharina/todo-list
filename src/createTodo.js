import { Todo } from './todo';
import { Project } from './project';
import { projectArray, currentProject } from './createProject';

export const renderTodos = () => {
  if (currentProject) {
    const tasks = currentProject.taskList;
    const container = document.querySelector('.task-container');
    container.innerHTML = '';

    tasks.forEach((task) => {
      const divTasks = document.createElement('div');
      divTasks.classList.add('div-tasks');

      const divTitle = document.createElement('div');
      divTitle.classList.add('div-title');
      divTitle.textContent = `${task.title}`;

      const divDate = document.createElement('div');
      divDate.classList.add('div-date');
      divDate.textContent = `${task.dueDate}`;
      // need to change format w date-fns

      const divPriority = document.createElement('div');
      divPriority.classList.add('div-priority');
      divPriority.textContent = `${task.priority}`;
      // need to change to flag

      const rightContainer = document.createElement('div');
      rightContainer.classList.add('right-container');

      const details = document.createElement('i');
      details.classList.add('fa-solid', 'fa-circle-info');

      const editButton = document.createElement('i');
      editButton.classList.add('fa-solid', 'fa-pen-to-square');

      const bin = document.createElement('i');
      bin.classList.add('fa-solid', 'fa-trash-can');
      // bin.dataset.index = index;

      rightContainer.append(divDate, divPriority, bin, details);
      divTasks.append(divTitle, rightContainer);
      container.append(divTasks);
    });
  }
};

export const submitTasks = () => {
  const submitTask = document.querySelector('#submit-task');

  const submitTaskForm = () => {
    const title = document.querySelector('#title').value;
    const desc = document.querySelector('#description').value;
    const dueDate = document.querySelector('#date').value;
    const priority = document.querySelector(
      'input[type="radio"]:checked'
    ).value;

    // Check if a project is selected
    if (currentProject) {
      const task = new Todo(title, desc, dueDate, priority);

      currentProject.addTodo(task);
      console.log(currentProject);

      localStorage.setItem('projectArray', JSON.stringify(projectArray));

      document.querySelector('.task-popup').classList.add('hidden');
      resetForm(); // Reset the form
      resetRadioButtons('input[type="radio"]');
    } else {
      // Inform the user that they need to select a project
      alert('Please select a project before adding a task.');
    }
  };

  submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    submitTaskForm();
    renderTodos();
  });

  // Allowing form submission when enter key is pressed
  dueDate.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitProjectForm();
    }
  });
};

// Reset modal form
export function resetForm() {
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  inputs.forEach((input) => {
    if (input.type !== 'radio') {
      input.value = '';
    }
  });
  textArea.value = '';
}

// Resets radio button so none are checked
function resetRadioButtons(selector) {
  const radioButtons = document.querySelectorAll(selector);
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
}
