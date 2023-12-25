// deleting items
// adding items
// setting todo as complete
// localstorage
// editing tasks
// fake tasks
// sidebar

// when submit task button is pressed, task is pushed to an array
// when submit project button is pressed, project is added to sidebar, and this can be held in an array
// need a way for todos to be in certain different projects

// have a default project called inbox or smth
// create new project, this should then be selectable
// within the certain project we should be able to add tasks to it

import { createTodoModal, createProjectModal } from './modal';
import { projectArray, submitProjects } from './createProject';
import { submitTasks } from './createTodo';

createTodoModal();
createProjectModal();
submitProjects();
submitTasks();
