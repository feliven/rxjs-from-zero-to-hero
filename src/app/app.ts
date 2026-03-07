import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom, from, fromEvent, Observable, of } from 'rxjs';
import { CustomObserver } from './custom-observer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs-udemy');

  constructor() {
    const numbers$ = from([1, 2, 3, 4, 5]);

    numbers$.subscribe(new CustomObserver());
  }
}
