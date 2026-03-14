import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-testes',
  imports: [RouterLink],
  templateUrl: './testes.html',
})
export class Testes {
  constructor() {
    const subject$ = new Subject();
    subject$.next('message 1');

    subject$.subscribe((data) => console.log('observer 1:', data));

    setTimeout(() => {
      subject$.next('message 2');
      subject$.next('message 3');
      subject$.next('message 4');

      subject$.subscribe((data) => console.log('observer 2:', data));
    }, 3000);
  }
}
