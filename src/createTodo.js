import { Todo } from './todo';

export function submitTasks() {
  let tasksArr = [];
  const submitTask = document.querySelector('#submit-task');
  let inputs = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea');

  submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const desc = document.querySelector('#description').value;
    const dueDate = document.querySelector('#date').value;
    const priority = document.querySelector(
      'input[type="radio"]:checked'
    ).value;

    const task = new Todo(title, desc, dueDate, priority);
    tasksArr.push(task);
    console.log(tasksArr);

    document.querySelector('.task-popup').classList.add('hidden');
    resetForm(inputs, textArea);
    resetRadioButtons('input[type="radio"]');
  });
}

function resetForm(inputs, textArea) {
  inputs.forEach((input) => {
    if (input.type !== 'radio') {
      input.value = '';
    }
  });
  textArea.value = '';
}

// resets radio button so none are checked
function resetRadioButtons(selector) {
  const radioButtons = document.querySelectorAll(selector);
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
}
