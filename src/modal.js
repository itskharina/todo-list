import { resetForm } from './createTask';

export const createTodoModal = () => {
  const addTask = document.querySelector('.add-task');
  addTask.addEventListener('click', openTask);

  const removeTask = document.querySelector('.remove-task');
  removeTask.addEventListener('click', closeTask);

  const modal = document.querySelector('.task-popup');

  function openTask() {
    modal.classList.remove('hidden');
  }

  function closeTask() {
    resetForm();
    modal.classList.add('hidden');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTask();
    }
  });
};

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
