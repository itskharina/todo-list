import { Project } from './project';
// import { Todo } from './todo';

export const projectArray = [];

export const submitProjects = () => {
  const submitProjectButton = document.querySelector('#submit-project');
  let inputs = document.querySelectorAll('input');

  submitProjectButton.addEventListener('click', (e) => {
    e.preventDefault();

    const projectName = document.querySelector('#name').value;

    let project = new Project(projectName);
    projectArray.push(project);
    console.log(project);
    console.log(projectArray);

    document.querySelector('.project-popup').classList.add('hidden');
    inputs.forEach((input) => {
      input.value = '';
    });

    renderProject();
  });
};

const renderProject = () => {
  const projectUL = document.querySelector('ul');
  projectUL.innerHTML = '';

  projectArray.forEach((project, index) => {
    const projectLI = document.createElement('li');
    const projectButton = document.createElement('button');

    const div = document.createElement('div');
    div.classList.add('icon-name');

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-list-ul');

    const bin = document.createElement('i');
    bin.classList.add('fa-solid', 'fa-trash-can');
    bin.dataset.index = index; // Add a data attribute to store the index

    const span = document.createElement('span');
    span.innerHTML = `${project.name}`;

    div.append(icon, span);
    projectButton.append(div, bin);
    projectLI.append(projectButton);
    projectUL.append(projectLI);
  });

  const deleteBtns = document.querySelectorAll('.fa-trash-can');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', deleteProject);
  });
};

const deleteProject = (e) => {
  const index = e.target.dataset.index;
  projectArray.splice(index, 1);
  // console.log(projectArray);
  renderProject();
};
