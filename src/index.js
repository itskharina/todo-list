import {
  createTodoModal,
  initializeTodoModal,
  createProjectModal,
} from './modal';
import {
  projectArray,
  submitProjects,
  renderProjects,
  currentProject,
} from './createProject';
import { renderTasks, submitTasks } from './createTask';
import { Project } from './project';
import { Task } from './task';
import { today, week, all } from './date';

const todayBtn = document.querySelector('.today');
const weekBtn = document.querySelector('.week');
const allBtn = document.querySelector('.all');

todayBtn.addEventListener('click', today);
weekBtn.addEventListener('click', week);
allBtn.addEventListener('click', all);

const projectArrayStorage = JSON.parse(localStorage.getItem('projectArray'));
const currentProjectStorage = JSON.parse(
  localStorage.getItem('currentProject')
);

// Check if there is stored project data
if (projectArrayStorage) {
  projectArrayStorage.forEach((projectData) => {
    const project = new Project(projectData.name);

    // Check if there are stored tasks for the project
    if (projectData.taskList) {
      projectData.taskList.forEach((taskData) => {
        const task = new Task(
          taskData.title,
          taskData.desc,
          taskData.dueDate,
          taskData.priority
        );
        project.addTask(task);
      });
    }

    projectArray.push(project);
  });
}

// if (currentProjectStorage) {
//   const currentProjectIndex = projectArray.findIndex(
//     (project) => project.name === currentProjectStorage.name
//   );
//   currentProject = projectArray[currentProjectIndex];
// }
renderProjects();
renderTasks();

initializeTodoModal();
createProjectModal();
submitProjects();
submitTasks();
