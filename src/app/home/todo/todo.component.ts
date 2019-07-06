import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos = [];
  public todoName = '';

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {
    this.todoService.listTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  public addTodo() {
    if (this.todoName.length > 0) {
      const todo = {
        nome: this.todoName,
        finalizado: false,
        favorito: false,
        editTodo: false
      };
      this.todoService.addTodo(todo).subscribe(todo => {
        this.todos.push(todo);
        this.todoName = '';
      });
    } else {
      alert('Task vazia');
    }
  }

  public deleteTodo(todo) {
    this.todos = this.todos.filter(todoItem => {
      return todoItem !== todo;
    });
    this.todoService.deleteTodo(todo).subscribe();
  }

  public toggleTodo(todo) {
    todo.favorito = !todo.favorito;
    this.todoService.updateTodo(todo).subscribe();
  }

  public editTodo(todo) {
    todo.editTodo = !todo.editTodo;
    this.todoService.updateTodo(todo).subscribe();
  }

  finalizar(todo) {
    this.todoService.updateTodo(todo).subscribe();
  }
}
