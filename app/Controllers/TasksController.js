import { tasksService } from "../Services/TasksService.js";

//Public
export default class TasksController {

  addTask(listId) {
    window.event.preventDefault();
    let form = window.event.target;
    let newTask = {
      name: form['task'].value,
      listId: listId
    };
    
    tasksService.addTask(newTask);
    form.reset();
  }

  deleteTask(taskId) {
      let confirm = window.confirm("Are you sure you want to delete this task?");
      if (confirm) tasksService.deleteTask(taskId);
      return;
  }

  toggle(id) {
      console.log('toggle')
      tasksService.toggle(id);
  }
}
