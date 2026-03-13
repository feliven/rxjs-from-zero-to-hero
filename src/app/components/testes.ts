import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { distinctUntilChanged, from } from 'rxjs';

@Component({
  selector: 'app-testes',
  imports: [RouterLink],
  templateUrl: './testes.html',
})
export class Testes {
  users = [
    { id: '1', name: 'John', age: 30 },
    { id: '1', name: 'John', age: 30 },
    { id: '2', name: 'Mary', age: 40 },
    { id: '3', name: 'Igor', age: 20 },
    { id: '3', name: 'Igor', age: 20 },
    { id: '4', name: 'Eve', age: 50 },
    { id: '3', name: 'Igor', age: 20 },
  ];

  users$ = from(this.users).pipe(
    distinctUntilChanged((previous, current) => previous.name === current.name),
  );

  constructor() {
    this.users$.subscribe((res) => {
      console.log(res);
    });

    console.log(this.users[0] == this.users[1]);
  }
}
