import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor(title, color, id = generateId()) {
    this.title = title;
    this.color = color;
    this.id = id;
  }
// GO BACK TO HERE
  get Template() {
    let tasks = ProxyState.tasks.filter(task => task.listId == this.id)
    return /*html*/ `
        <div class="col-md-3 my-4">
                    <div class="card shadow rounded">
                        <div class="card-body">
                            <div class="list-header bg-${this.color} pl-1">
                                <i class="fas fa-times fa-2x p-1" onclick="app.listsController.deleteList('${this.id}')"></i>
                                <h5 class="text-center">${this.title}</h5>
                                <p class="text-center">${tasks.filter(task => task.checked).length}/${tasks.length}</p>
                            </div>
                        <div class="tasks d-flex flex-column justify-content-between px-4" id="tasks">
                        ${this.Tasks}
                        </div>
                        <form onsubmit="app.tasksController.addTask('${this.id}')">
                            <div class="form-row d-flex">
                                <div class="col-8">
                                <input type="text" name="task" class="form-control" required minlength="3" maxlength="50" placeholder="Add Task...">
                                </div>
                                <div class="col-2">
                                <button type="submit" class="btn bg-dark text-white ml-2" title="add task"><i class="fas fa-plus-square"></i></button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
        `;
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter((t) => t.listId === this.id);
    let template = "";
    tasks.forEach((t) => (template += t.Template));

    return template;
  }
}
