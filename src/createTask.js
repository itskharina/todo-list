import { Task } from './task';
import { Project } from './project';
import { projectArray, currentProject } from './createProject';
import { format } from 'date-fns';

export const renderTasks = () => {
  if (currentProject) {
    const tasks = currentProject.taskList;
    const container = document.querySelector('.task-container');
    container.innerHTML = '';

    tasks.forEach((task, index) => {
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', 'checkbox');

      const taskAndInfo = document.createElement('div');
      taskAndInfo.classList.add('task-with-info');

      const divTasks = document.createElement('div');
      divTasks.classList.add('div-tasks');

      const divTitle = document.createElement('div');
      divTitle.classList.add('div-title');
      divTitle.textContent = `${task.title}`;

      const divDate = document.createElement('div');
      divDate.classList.add('div-date');
      const dateFormatted = format(task.dueDate, 'do MMM yyyy');
      divDate.innerHTML = `<b>Due</b>: ${dateFormatted}`;

      const divPriority = document.createElement('div');
      divPriority.classList.add('div-priority');

      if (task.priority === 'high') {
        divPriority.innerHTML =
          "<img src='../dist/images/redflag.png' alt='red flag'>";
      } else if (task.priority === 'medium') {
        divPriority.innerHTML =
          "<img src='../dist/images/orangeflag.png' alt='orange flag'>";
      } else {
        divPriority.innerHTML =
          "<img src='../dist/images/greenflag.png' alt='green flag'>";
      }

      const rightContainer = document.createElement('div');
      rightContainer.classList.add('right-container');

      const leftContainer = document.createElement('div');
      leftContainer.classList.add('left-container');

      const details = document.createElement('i');
      details.classList.add('fa-solid', 'fa-circle-info');
      details.dataset.index = index;

      const editButton = document.createElement('i');
      editButton.classList.add('fa-solid', 'fa-pen-to-square');

      const bin = document.createElement('i');
      bin.classList.add('fa-solid', 'fa-trash-can');
      bin.dataset.index = index;

      rightContainer.append(divDate, divPriority, editButton, details, bin);
      leftContainer.append(checkbox, divTitle);
      divTasks.append(leftContainer, rightContainer);
      taskAndInfo.append(divTasks);
      container.append(taskAndInfo);
    });

    const deleteBtns = document.querySelectorAll('.fa-trash-can');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', deleteTask);
    });

    const infoBtns = document.querySelectorAll('.fa-circle-info');
    infoBtns.forEach((info) => {
      info.addEventListener('click', showInfo);
    });
  }
};

const deleteTask = (e) => {
  const index = e.target.dataset.index;
  currentProject.taskList.splice(index, 1);
  renderTasks();
};

const showInfo = (e) => {
  e.stopPropagation();

  const index = e.target.dataset.index;
  const task = currentProject.taskList[index];

  // Check if the info container already exists for the current task
  const existingInfoContainer = e.target
    .closest('.task-with-info')
    .querySelector('.info-container');

  if (existingInfoContainer) {
    // If it exists, remove it to hide the container
    existingInfoContainer.remove();
  } else {
    // If it doesn't exist, create and append the info container

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const infoDescription = document.createElement('p');
    infoDescription.classList.add('info-desc');
    infoDescription.innerHTML = `<b>Description:</b> ${task.desc}`;

    infoContainer.append(infoDescription);

    e.target.closest('.task-with-info').append(infoContainer);
  }

  document.addEventListener('click', closeInfoDropdown);
};

// Closes all dropdowns when user clicks the screen
const closeInfoDropdown = () => {
  const infoContainers = document.querySelectorAll('.info-container');
  infoContainers.forEach((infoContainer) => {
    infoContainer.remove();
  });
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
      const task = new Task(title, desc, dueDate, priority);

      currentProject.addTask(task);
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
    renderTasks();
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
