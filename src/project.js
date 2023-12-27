export class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  addTodo(todo) {
    this.taskList.push(todo);
  }
}

// removeTodo(index) {
//   this.taskList.splice(index, 1);
// }
