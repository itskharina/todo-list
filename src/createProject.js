import { Project } from './project';
import { resetForm } from './createTodo';

// fix the button bold text thing

export const projectArray = [];
export let currentProject = null;

const renderProjects = () => {
  const projectUL = document.querySelector('ul');
  projectUL.innerHTML = '';

  projectArray.forEach((project, index) => {
    const projectLI = document.createElement('li');

    const projectButton = document.createElement('button');
    projectButton.classList.add('project-btn', 'button');

    const div = document.createElement('div');
    div.classList.add('icon-name');

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-list-ul');

    const bin = document.createElement('i');
    bin.classList.add('fa-solid', 'fa-trash-can');
    bin.dataset.index = index;

    const span = document.createElement('span');
    span.innerHTML = `${project.name}`;

    div.append(icon, span);
    projectButton.append(div, bin);
    projectLI.append(projectButton);
    projectUL.append(projectLI);

    // add click event listener to project button
    projectButton.addEventListener('click', () => {
      setCurrentProject(project);
      renderProjects();
    });

    if (currentProject && project.name === currentProject.name) {
      projectButton.classList.add('current-project');

      // setting project name as the title in the UI
      const projectTitle = document.querySelector('.project-title');
      projectTitle.textContent = currentProject.name;
      // adding underline under the project title
      projectTitle.classList.add('underline');
    }
  });

  const deleteBtns = document.querySelectorAll('.fa-trash-can');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', deleteProject);
  });
};

export const submitProjects = () => {
  const submitProjectButton = document.querySelector('#submit-project');

  submitProjectButton.addEventListener('click', (e) => {
    e.preventDefault();

    const projectName = document.querySelector('#name').value;
    const project = new Project(projectName);

    projectArray.push(project);
    currentProject = project;
    // console.log(project);

    localStorage.setItem('projectArray', JSON.stringify(projectArray));

    document.querySelector('.project-popup').classList.add('hidden');
    renderProjects();
    resetForm();
    console.log(projectArray);
  });
};

const deleteProject = (e) => {
  const index = e.target.dataset.index;
  projectArray.splice(index, 1);

  // Check if the deleted project is the current project
  if (currentProject && index === currentProject.name) {
    currentProject = null;
    localStorage.removeItem('currentProject');
  }

  localStorage.setItem('projectArray', JSON.stringify(projectArray));

  const projectTitle = document.querySelector('.project-title');
  projectTitle.textContent = '';
  projectTitle.classList.remove('underline');
  renderProjects();
};

const setCurrentProject = (project) => {
  currentProject = project;
  localStorage.setItem('currentProject', JSON.stringify(currentProject));
};

// document.addEventListener('click', function handleClick(e) {
//   if (e.target.classList.contains('current-project')) {
//     e.target.style.fontWeight = '600';
//     e.target.style.backgroundColor = '#ccc7e4';
//   }
// });
