import { resetForm, resetRadioButtons } from './createTask';
import { currentProject } from './createProject';

export function initializeTodoModal() {
  const addTask = document.querySelector('.add-task');
  addTask.addEventListener('click', openTask);

  const removeTask = document.querySelector('.remove-task');
  removeTask.addEventListener('click', closeTask);

  const modal = document.querySelector('.task-popup');
  const titleElement = document.querySelector('.top h3');
  const submitButton = document.querySelector('#submit-task');

  let currentTask;

  function createTodoModal(e) {
    const titleInput = document.querySelector('#title');
    const descInput = document.querySelector('#description');
    const dateInput = document.querySelector('#date');
    const priorityInput = document.querySelectorAll('input[type="radio"]');

    if (e && e.target.classList.contains('fa-pen-to-square')) {
      titleElement.textContent = 'Edit your task!';
      submitButton.textContent = 'Edit Task';
      submitButton.classList.add('edit');
      submitButton.classList.remove('add');

      const taskIndex = e.target.dataset.index;
      currentTask = currentProject.taskList[taskIndex];

      // Populate form fields with current task details
      titleInput.value = currentTask.title;
      descInput.value = currentTask.desc;
      dateInput.value = currentTask.dueDate;

      priorityInput.forEach((radio) => {
        if (radio.value === currentTask.priority) {
          radio.checked = true;
        }
      });
    } else {
      titleElement.textContent = 'Add your task!';
      submitButton.textContent = 'Add Task';
      submitButton.classList.remove('edit');
      submitButton.classList.add('add');
    }

    modal.classList.remove('hidden');
  }

  function openTask() {
    createTodoModal();
  }

  function closeTask() {
    modal.classList.add('hidden');
    resetForm();
    resetRadioButtons('input[type="radio"]');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTask();
    }
  });

  return createTodoModal;
}

export const createProjectModal = () => {
  const addProject = document.querySelector('.add-project');
  addProject.addEventListener('click', openProject);

  const removeProject = document.querySelector('.remove-project');
  removeProject.addEventListener('click', closeProject);

  const modal = document.querySelector('.project-popup');

  function openProject() {
    modal.classList.remove('hidden');
  }

  function closeProject() {
    resetForm();
    modal.classList.add('hidden');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProject();
    }
  });
};
