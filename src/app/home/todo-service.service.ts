import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API = 'https://mighty-anchorage-12607.herokuapp.com/todo/';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  constructor(private httpCliente: HttpClient) {}

  addTodo(todo) {
    // OBSERVABLE
    return this.httpCliente.post(API + 'create', todo);
  }

  listTodos() {
    return this.httpCliente.get(API).pipe(map(res => res as Object[]));
  }

  deleteTodo(todo) {
    return this.httpCliente.delete(API + todo.id);
  }

  updateTodo(todo){
    return this.httpCliente.put(API + todo.id, todo);
  }
}
