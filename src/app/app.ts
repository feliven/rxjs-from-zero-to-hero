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
  data = signal<number>(0);

  constructor() {
    const users$ = new Observable((observer) => {
      observer.next(1);
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      observer.next(4);
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
