import { Injectable } from '@angular/core';
import { BehaviorSubject, from, of } from 'rxjs';

export interface ITodo {
  id: number;
  text: string;
  isComplete: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: ITodo[] = [
    { id: 1, text: 'fsgsfsg', isComplete: false },
    { id: 2, text: 'jkjgkj', isComplete: true },
    { id: 3, text: 'weqqwe', isComplete: false },
    { id: 4, text: 'vcnvncm', isComplete: false },
  ];

  // Store here the state for the list of the todos
  todoListSubject$ = new BehaviorSubject<ITodo[]>(this.todoList);

  // Create several methods like add todo, remove todo and toggle todo, which essentially means one method must add todos to the array to your stream.

  addTodo(text: string) {
    const todoList = this.todoListSubject$.getValue();
    const idList = todoList.map((todo) => {
      return todo.id;
    });
    const newId = Math.max(...idList) + 1;

    const newTodo: ITodo = {
      id: newId,
      text: text,
      isComplete: false,
    };

    const listWithNewTodo = [...todoList, newTodo];
    this.todoListSubject$.next(listWithNewTodo);
  }

  removeTodo(id: number) {
    const todoList = this.todoListSubject$.getValue();
    const listAfterRemovingTodo = todoList.filter((todo) => todo.id !== id);
    this.todoListSubject$.next(listAfterRemovingTodo);
  }

  toggleTodo(id: number) {
    const todoList = this.todoListSubject$.getValue();
    const listAfterToggle = todoList.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
    );
    this.todoListSubject$.next(listAfterToggle);
  }
}
