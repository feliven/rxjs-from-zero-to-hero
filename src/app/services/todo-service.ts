import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

interface ITodo {
  id: string;
  text: string;
  isComplete: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: ITodo[] = [
    { id: '1', text: 'fsgsfsg', isComplete: false },
    { id: '2', text: 'jkjgkj', isComplete: true },
    { id: '3', text: 'weqqwe', isComplete: false },
    { id: '4', text: 'vcnvncm', isComplete: false },
  ];

  // Store here the state for the list of the todos

  // Create several methods like add todo, remove todo and toggle todo, which essentially means one method must add todos to the array to your stream.

  // Second, remove this data and one which will toggle on the specific todo by id here is completed property.
}
