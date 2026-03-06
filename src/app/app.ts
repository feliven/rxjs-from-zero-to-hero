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
  }
}
