import { isToday, isThisWeek } from 'date-fns';
import { projectArray } from './createProject';
import { renderTasks } from './createTask';
import { setCurrentProject } from './createProject';
const projectTitle = document.querySelector('.project-title');

export const today = () => {
  let todayTasks = [];

  projectArray.forEach((project) => {
    project.taskList.forEach((task) => {
      if (isToday(new Date(task.dueDate))) {
        todayTasks.push(task);
      }
    });
  });

  setCurrentProject({ taskList: todayTasks });
  projectTitle.textContent = 'Tasks due today';

  renderTasks(todayTasks);
};

export const week = () => {
  let weekTasks = [];

  projectArray.forEach((project) => {
    project.taskList.forEach((task) => {
      if (isThisWeek(new Date(task.dueDate))) {
        weekTasks.push(task);
      }
    });
  });

  weekTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  setCurrentProject({ taskList: weekTasks });
  projectTitle.textContent = 'Tasks due this week';

  renderTasks(weekTasks);
};

export const all = (arr) => {
  let allTasks = [];

  arr.forEach((project) => {
    allTasks.push(...project.taskList);
  });

  allTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  setCurrentProject({ taskList: allTasks });
  projectTitle.textContent = 'All tasks';

  renderTasks(allTasks);
};
