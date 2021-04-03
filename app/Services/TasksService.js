import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  deleteTask(taskId) {
    console.log(ProxyState.tasks);
    ProxyState.tasks = ProxyState.tasks.filter((task) => task.id != taskId);
    console.log(ProxyState.tasks);
    saveState();
  }

  addTask(newTask) {
    ProxyState.tasks.push(
      new Task(newTask.name, newTask.listId, newTask.checked, newTask.id)
    );
    ProxyState.tasks = ProxyState.tasks;
    saveState();
  }

  toggle(id) {
      console.log(id);
      let task = ProxyState.tasks.find(task => task.id == id);
      console.log('task function', task)


      task.checked = !task.checked;
    // task.checked = task.checked ? false : true;

      ProxyState.tasks = ProxyState.tasks;
  }
}
// go back to here or list servrice to task service
export const tasksService = new TasksService();
