import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, combineLatest, of, from } from 'rxjs';

@Component({
  selector: 'app-testes',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './testes.html',
})
export class Testes {
  users = [
    { id: '1', name: 'John', age: 30 },
    { id: '2', name: 'Mary', age: 40 },
    { id: '3', name: 'Igor', age: 20 },
  ];

  messagePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 2000);
  });

  boa$ = new Observable((observer) => {
    observer.next('boa');

    setTimeout(function () {
      observer.next('boa tarde');
    }, 1000);

    setTimeout(() => {
      observer.next('boa noite');
    }, 3000);
  });

  data$ = combineLatest({
    users: of(this.users),
    promise: from(this.messagePromise),
    boa: this.boa$,
  });

  constructor() {
    this.data$.subscribe((data) => {
      console.log(data);
    });
  }
}
