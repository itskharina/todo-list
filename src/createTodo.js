import { Todo } from './todo';
import { Project } from './project';
import { projectArray, currentProject } from './createProject';

export const submitTasks = () => {
  const submitTask = document.querySelector('#submit-task');

  submitTask.addEventListener('click', (e) => {
    e.preventDefault();

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
