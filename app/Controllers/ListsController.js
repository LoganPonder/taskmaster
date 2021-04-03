import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from '../Utils/LocalStorage.js';

//Private
function _draw() {
    let lists = ProxyState.lists;
    let template = '';

    lists.forEach(list => template += list.Template)
    document.getElementById('lists').innerHTML = template;

}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on('lists', _draw);
    ProxyState.on('tasks', _draw);
    ProxyState.on('tasks', saveState);
    ProxyState.on('lists', saveState);
    _draw();
  }


  createList() {
    window.event.preventDefault();
    let form = window.event.target;
    let newList = {
      name: form['title'].value,
      color: form['listColor'].value
    }
    listsService.createList(newList);
    form.reset();
  }

  deleteList(id) {
    listsService.deleteList(id);
  }
}
