import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom, from, fromEvent, of } from 'rxjs';

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
    const messagePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('msg de ERRO');
      }, 1000);
    });

    const message$ = from(messagePromise);

    message$.subscribe({
      next: (message) => {
        console.log('promise:', message);
      },
      error: (error) => {
        console.log('ERRO', error);
      },
      complete: () => {
        console.log('finalizado');
      },
    });
  }
}
