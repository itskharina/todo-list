export class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }
}
