import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom, from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs-udemy');

  constructor() {
    const users = [
      { id: '1', name: 'John', age: 30 },
      { id: '2', name: 'Mary', age: 40 },
      { id: '3', name: 'Igor', age: 20 },
    ];

    const users$ = new Observable((observer) => {
      observer.next(users);
    });

    users$.subscribe({
      next: (users) => {
        console.log(users);
      },
      complete: () => {
        console.log('end of stream');
      },
    });
  }
}
