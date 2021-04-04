import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor(title, color, id = generateId()) {
    this.title = title;
    this.color = color;
    this.id = id;
  }
// GO BACK TO HERE for TEMPLATE
  get Template() {
    let tasks = ProxyState.tasks.filter(task => task.listId == this.id)
    return /*html*/ `
      <div class="col-md-3 list-index">
                    <div class="list-item rounded shadow d-flex flex-column mb-5 bg-white">
                        <div class="list-header ${this.color} pt-2 px-3 pb-1">
                            <i class="fas fa-times fa-2x p-1" onclick="app.listsController.deleteList('${
                              this.id
                            }')"></i>
                            <h5 class="text-center title-size title-font">${
                              this.title
                            }</h5>
                            <p class="text-center title-font number-size">${
                              tasks.filter((task) => task.checked).length
                            }/${tasks.length}</p>
                        </div>
                        <div class="list-tasks">
                            <div class="tasks d-flex flex-column justify-content-between px-4" id="tasks">
                            ${this.Tasks}
                            </div>
                        </div>
                        <div class="list-footer ${this.color} pt-4 pl-4 pb-3">
                            <form onsubmit="app.tasksController.addTask('${
                              this.id
                            }')">
                                <div class="form-row d-flex pl-5">
                                    <div class="col-8">
                                    <input type="text" name="task" class="form-control shadow" required minlength="3" maxlength="50" placeholder="Add Task...">
                                    </div>
                                    <div class="col-2">
                                    <button type="submit" class="btn bg-dark text-white ml-2 shadow" title="add task"><i class="fas fa-plus-square"></i></button>
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
