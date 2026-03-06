import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs-udemy');
  constructor() {
    const numbers$ = of([1, 2, 3, 4, 5]);

    numbers$.subscribe((data) => {
      console.log('observer:', data);
    });
  }
}
