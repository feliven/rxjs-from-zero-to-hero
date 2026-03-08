import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, firstValueFrom, from, fromEvent, map, Observable, of } from 'rxjs';
import { CustomObserver } from './custom-observer';

type User = {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs-udemy');

  timeout = parseInt((Math.random() * 2000).toPrecision());

  constructor() {
    console.log('timeout:', this.timeout);

    const users$: Observable<User[]> = new Observable((observer) => {
      // observer.next(null);
      setTimeout(() => {
        observer.next([
          { id: '1', name: 'John', age: 30, isActive: true },
          { id: '2', name: 'Mary', age: 40, isActive: true },
          { id: '3', name: 'Igor', age: 20, isActive: true },
        ]);
      }, this.timeout);
    });

    const filteredUsernames$ = users$.pipe(
      filter((users) => users?.every((user) => user.isActive)),
      map((users) => {
        return users.map((user) => user.name);
      }),
    );

    filteredUsernames$.subscribe((usernames) => {
      console.log('filteredUsernames$:', usernames);
    });
  }
}
