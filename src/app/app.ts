import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { combineLatest, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs-udemy');

  users = [
    { id: '1', name: 'John', age: 30 },
    { id: '2', name: 'Mary', age: 40 },
    { id: '3', name: 'Igor', age: 20 },
  ];

  messagePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 1000);
  });

  data$ = combineLatest({
    users: of(this.users),
    promise: from(this.messagePromise),
  });

  constructor() {
    this.data$.subscribe((data) => {
      console.log(data);
    });
  }
}
