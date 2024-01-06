// todo - add form validation, edit tasks button, add crossout when checked todo as finished and fix sidebar bold thing

import { createTodoModal, createProjectModal } from './modal';
import { projectArray, submitProjects } from './createProject';
import { submitTasks } from './createTask';

createTodoModal();
createProjectModal();
submitProjects();
submitTasks();
