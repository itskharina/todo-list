import { Task } from './task';
import { projectArray, currentProject } from './createProject';
import { format } from 'date-fns';
import { initializeTodoModal } from './modal';
import { projectArrayStorage } from '.';

let editIndex;
const modal = document.querySelector('.task-popup');

// Creates tasks container
export const renderTasks = (tasks) => {
  const container = document.querySelector('.task-container');
  container.innerHTML = '';

  if (currentProject || projectArrayStorage) {
    tasks.forEach((task, index) => {
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('class', 'checkbox');
      checkbox.classList.add('checkbox');
      checkbox.dataset.index = index;

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
        divPriority.innerHTML = "<img src='images/redflag.png' alt='red flag'>";
      } else if (task.priority === 'medium') {
        divPriority.innerHTML =
          "<img src='images/orangeflag.png' alt='orange flag'>";
      } else {
        divPriority.innerHTML =
          "<img src='images/greenflag.png' alt='green flag'>";
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
      editButton.dataset.index = index;

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

    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    checkbox.forEach((check) => {
      check.addEventListener('change', deleteTask);
    });

    const editBtns = document.querySelectorAll('.fa-pen-to-square');
    editBtns.forEach((edit) => {
      edit.addEventListener('click', editTasks);
    });
  } else {
    console.error('tasks is not an array:', tasks);
  }

  if (tasks) {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }
};

// Creates a new task with user's input
export const submitTasks = () => {
  const submitTask = document.querySelector('#submit-task');
  let editCurrentTask;

  const submitTaskForm = (e) => {
    const submitButton = document.querySelector('#submit-task');
    const title = document.querySelector('#title').value;
    const desc = document.querySelector('#description').value;
    const dueDate = document.querySelector('#date').value;
    const priority = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    // Checks to see if task already exists
    if (
      currentProject &&
      submitButton.classList.contains('add') &&
      currentProject.taskList.some((task) => task.title === title)
    ) {
      alert('A task with this title already exists in this project!');
      return;
    } else if (!title || !desc || !dueDate || !priority) {
      alert("Please don't leave anything blank!");
    } else {
      if (currentProject && e.target.classList.contains('add')) {
        const task = new Task(title, desc, dueDate, priority);
        currentProject.addTask(task);

        localStorage.setItem('projectArray', JSON.stringify(projectArray));
      } else if (currentProject && e.target.classList.contains('edit')) {
        editCurrentTask = currentProject.taskList[editIndex];
        editCurrentTask.title = title;
        editCurrentTask.desc = desc;
        editCurrentTask.dueDate = dueDate;
        editCurrentTask.priority = priority;

        localStorage.setItem('projectArray', JSON.stringify(projectArray));
      } else {
        alert('You need to select a project first!');
      }
    }
  };

  submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    submitTaskForm(e);
    resetForm();
    modal.classList.add('hidden');
    renderTasks(currentProject.taskList);
  });
};

// Allows user to edit task
const editTasks = (e) => {
  editIndex = e.target.dataset.index;
  // Gets the createTodoModal(e) function that was returned
  const editTodoModal = initializeTodoModal();
  // Calling the createTodoModal() function now that it has been returned and stored in editTodoModal
  editTodoModal(e);
};

const deleteTask = (e) => {
  const index = e.target.dataset.index;
  const task = currentProject.taskList[index];

  // Remove the task from the original project
  const originalProject = projectArray.find((project) =>
    project.taskList.includes(task)
  );
  if (originalProject) {
    const taskIndexInOriginalProject = originalProject.taskList.indexOf(task);
    originalProject.taskList.splice(taskIndexInOriginalProject, 1);
  }

  // Remove the task from the current project
  currentProject.taskList.splice(index, 1);

  localStorage.setItem('projectArray', JSON.stringify(projectArray));
  renderTasks(currentProject.taskList);
};

// Shows description when info button is clicked
const showInfo = (e) => {
  e.stopPropagation();

  const index = e.target.dataset.index;
  const task = currentProject.taskList[index];

  const existingInfoContainer = e.target
    .closest('.task-with-info')
    .querySelector('.info-container');

  if (existingInfoContainer) {
    existingInfoContainer.remove();
  } else {
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

// Closes description dropdown when user clicks on screen
const closeInfoDropdown = () => {
  const infoContainers = document.querySelectorAll('.info-container');
  infoContainers.forEach((infoContainer) => {
    infoContainer.remove();
  });
};

// Resets modal form
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
export function resetRadioButtons(selector) {
  const radioButtons = document.querySelectorAll(selector);
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
}
