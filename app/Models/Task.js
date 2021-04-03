import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class Task {
  constructor(title, listId, checked = false, id = generateId()) {
    this.title = title;
    this.listId = listId;
    this.checked = checked;
    this.id = id;
  }

  get Template() {
    return `
    <div class="task d-flex align-items-baseline justify-content-around">
        <input type="checkbox" ${this.checked ? 'checked' : ''} onclick="app.tasksController.toggle('${this.id}')" class="">
        <p>${this.title}</p>
        <i class="fas fa-trash" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>
    `;
  }
}
