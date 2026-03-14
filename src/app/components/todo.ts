import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ITodo, TodoService } from '../services/todo-service';

@Component({
  selector: 'app-todo',
  imports: [RouterLink],
  templateUrl: './todo.html',
})
export class Todo {
  todoService = inject(TodoService);
  listaTarefas = signal<ITodo[]>([]);
  adicionar = signal<ITodo[]>([]);
  remover = signal<ITodo[]>([]);
  toggle = signal<ITodo[]>([]);

  constructor() {
    this.listaTarefas.set(this.todoService.todoListSubject$.getValue());

    this.todoService.addTodo({ id: 5, text: 'teste', isComplete: true });
    this.adicionar.set(this.todoService.todoListSubject$.getValue());

    this.todoService.removeTodo(2);
    this.remover.set(this.todoService.todoListSubject$.getValue());

    this.todoService.toggleTodo(3);
    this.toggle.set(this.todoService.todoListSubject$.getValue());

    console.log('todoListBehaviorSubject$', this.todoService.todoListBehaviorSubject$.getValue());
  }
}
