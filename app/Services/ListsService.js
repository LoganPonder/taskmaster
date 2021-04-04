import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
    createList(newList) {
        ProxyState.lists = [...ProxyState.lists, new List(newList.name, newList.color)];
    }

    deleteList(id) {
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id);
        ProxyState.tasks = ProxyState.tasks;
        saveState();
    }
}

export const listsService = new ListsService();
