import { Project } from './project';
import { resetForm, renderTasks } from './createTask';

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

    const divProject = document.createElement('div');
    divProject.classList.add('icon-name');

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-list-ul');

    const bin = document.createElement('i');
    bin.classList.add('fa-solid', 'fa-trash-can');
    bin.dataset.index = index;

    const span = document.createElement('span');
    span.innerHTML = `${project.name}`;

    divProject.append(icon, span);
    projectButton.append(divProject, bin);
    projectLI.append(projectButton);
    projectUL.append(projectLI);

    // Add click event listener to project button on sidebar
    projectButton.addEventListener('click', () => {
      setCurrentProject(project);
      renderProjects();
      renderTasks();
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
  const projectNameInput = document.querySelector('#name');

  const submitProjectForm = () => {
    const projectName = projectNameInput.value;

    // Checks to see if project already exists
    if (projectArray.some((project) => project.name === projectName)) {
      alert('You already have a project with this name!');
      return;
    } else {
      const project = new Project(projectName);

      projectArray.push(project);
      currentProject = project;

      localStorage.setItem('projectArray', JSON.stringify(projectArray));
      document.querySelector('.project-popup').classList.add('hidden');
      renderProjects();
      resetForm();
      console.log(projectArray);
    }
  };

  submitProjectButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitProjectForm();
  });

  // Allowing form submission when enter key is pressed
  projectNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitProjectForm();
    }
  });
};

const deleteProject = (e) => {
  const index = e.target.dataset.index;
  const deletedProject = projectArray[index];

  projectArray.splice(index, 1);
  deletedProject.taskList = [];

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
  renderTasks();
};

// Sets the selected project in sidebar as current project
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
