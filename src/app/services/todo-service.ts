import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

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

  addTodo(todo: ITodo) {
    const todoList = this.todoListSubject$.getValue();
    const listWithNewTodo = [...todoList, todo];
    this.todoListSubject$.next(listWithNewTodo);

    // To update the list correctly following functional programming patterns, we need to create a new array containing the existing items plus the new one.

    //
    // const thisIsANumber = todoList.push(todo);
    //
    // In JavaScript and TypeScript, the Array.prototype.push() method returns the new length of the array.
    // This is commented because it changes the existing todoList for everyone.
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

    // map creates a new array, and { ...todo } creates a new object for the toggled item.
    // When you push this new array to todoListSubject$, subscribers receive a unique reference, making state changes explicit and easy to track.

    this.todoListSubject$.next(listAfterToggle);
  }

  toggleTodoErrado(id: number) {
    const todoList = this.todoListSubject$.getValue();
    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    console.log('todoIndex:', todoIndex);
    const completeStatus = todoList[todoIndex].isComplete;

    console.log('completeStatus:', completeStatus);
    todoList[todoIndex].isComplete = !completeStatus;

    // This changes the property of the existing object already stored in memory. Since your component's signals (listaTarefas, adicionar, etc.) all hold references to the same objects, modifying one object updates it everywhere simultaneously.

    this.todoListSubject$.next(todoList);
  }

  // Second, remove this data and one which will toggle on the specific todo by id here is completed property.
}
