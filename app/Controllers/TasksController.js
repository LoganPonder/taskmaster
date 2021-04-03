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
      tasksService.deleteTask(taskId);
  }

  toggle(id) {
      console.log('toggle')
      tasksService.toggle(id);
  }
}
