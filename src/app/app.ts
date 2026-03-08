import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom, from, fromEvent, map, Observable, of } from 'rxjs';
import { CustomObserver } from './custom-observer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs-udemy');

  promessa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 50);
  });

  constructor() {
    const users = [
      { id: '1', name: 'John', age: 30 },
      { id: '2', name: 'Mary', age: 40 },
      { id: '3', name: 'Igor', age: 20 },
    ];

    const users$ = of(users);

    const usernames$ = users$.pipe(
      map((users) => {
        return users.map((user) => user.name);
      }),
    );

    usernames$.subscribe((names) => console.log('usernames$:', names));

    users$.subscribe((users) => {
      const names1 = users.map((user) => user.name);

      console.log('names1:', names1);

      const names2 = users.map((user) => {
        return user.name;
      });

      console.log('names2:', names2);

      // users.map((user) => { user.name; }) uses a block body without a return statement. The expression user.name; evaluates but isn't returned, so each map iteration yields undefined, resulting in [undefined, undefined, undefined].

      const names3 = users.map((user) => {
        user.name;
      });

      console.log('names3:', names3);
    });
  }
}
