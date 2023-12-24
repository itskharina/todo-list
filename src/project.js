export class Project {
  constructor(name) {
    this.name = name;
    this.todoListProject = []; // change this ofc
  }

  addTodo(todo) {
    this.todoListProject.push(todo);
  }

  removeTodo(index) {
    this.todoList.splice(index, 1);
  }
}
