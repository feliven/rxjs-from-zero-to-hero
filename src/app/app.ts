import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs-udemy');
  data = signal<number>(0);

  constructor() {
    const numbers$ = from([1, 2, 3, 4, 5]);

    numbers$.subscribe((data) => {
      console.log('observer:', data);
      this.data.set(data);
    });

    const users = [
      { id: '1', name: 'John', age: 30 },
      { id: '2', name: 'Mary', age: 40 },
      { id: '3', name: 'Igor', age: 20 },
    ];

    const users$ = of(users);

    users$.subscribe((users) => {
      console.log(users);
    });

    const messagePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 1000);
    });
    const message$ = from(messagePromise);

    message$.subscribe((message) => {
      console.log('promise:', message);
    });
  }
}
