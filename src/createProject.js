import { from } from 'webpack-sources/lib/compatsource';
import { submitPressed } from './createtodo';

export const createProjectModal = () => {
  const addProject = document.querySelector('.add-project');
  addProject.addEventListener('click', openCard);

  const removeProject = document.querySelector('.remove-project');
  removeProject.addEventListener('click', closeCard);

  const modal = document.querySelector('.project-popup');

  function openCard() {
    modal.classList.remove('hidden');
  }

  function closeCard() {
    modal.classList.add('hidden');
  }
};

submitPressed();
