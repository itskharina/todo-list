import { Todo } from './todo';
import { Project } from './project';

export const projectArray = [];

export function renderTasks() {
  const submitProject = document.querySelector('#submit-project');

  submitProject.addEventListener('click', (e) => {
    e.preventDefault();
    const projectName = document.querySelector('#name').value;
    let project = new Project(projectName);
    projectArray.push(project);
    console.log(project);

    document.querySelector('.project-popup').classList.add('hidden');
  });

  const submitTask = document.querySelector('#submit-task');

  submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const desc = document.querySelector('#description').value;
    const dueDate = document.querySelector('#date').value;
    const priority = document.querySelector(
      'input[type="radio"]:checked'
    ).value;

    const task = new Todo(title, desc, dueDate, priority);
    projectArray.push(task);
    console.log(projectArray);

    document.querySelector('.task-popup').classList.add('hidden');
  });
}

//     const lastProject = projectArray[projectArray.length - 1];

//      Check if there is a project in projectArray
//     if (lastProject instanceof Project) {
//       const task = new Todo(title, desc, dueDate, priority);
//       lastProject.addTodo(task);
//       projectArray.push(task);
//       console.log(projectArray);
//     } else {
//       console.error('No project available to add the task.');
//     }

//     document.querySelector('.task-popup').classList.add('hidden');
//   });
