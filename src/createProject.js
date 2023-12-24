import { from } from 'webpack-sources/lib/compatsource';

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
    modal.classList.add('hidden');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProject();
    }
  });
};
