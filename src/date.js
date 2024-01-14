import { isToday, isThisWeek } from 'date-fns';
import { projectArray } from './createProject';
import { renderTasks } from './createTask';
const projectTitle = document.querySelector('.project-title');

export const today = () => {
  let todayTasks = [];

  // Loop through all projects in projectArray
  projectArray.forEach((project) => {
    // Filter tasks that are due today for each project
    const projectTodayTasks = project.taskList.filter((task) =>
      isToday(new Date(task.dueDate))
    );
    // Spread syntax so that we don't get a nested array
    todayTasks.push(...projectTodayTasks);
  });

  projectTitle.textContent = 'Tasks due today';

  renderTasks(todayTasks);
};

export const week = () => {
  let weekTasks = [];

  projectArray.forEach((project) => {
    const projectWeekTasks = project.taskList.filter((week) =>
      isThisWeek(new Date(week.dueDate), { weekStartsOn: 1 })
    );

    weekTasks.push(...projectWeekTasks);
  });

  weekTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  projectTitle.textContent = 'Tasks due this week';

  renderTasks(weekTasks);
};

export const all = (arr) => {
  let allTasks = [];

  arr.forEach((project) => {
    allTasks.push(...project.taskList);
  });

  allTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  projectTitle.textContent = 'All tasks';

  renderTasks(allTasks);
};
