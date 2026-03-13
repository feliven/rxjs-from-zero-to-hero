import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { distinct, from } from 'rxjs';

@Component({
  selector: 'app-testes',
  imports: [RouterLink],
  templateUrl: './testes.html',
})
export class Testes {
  users = [
    { id: '1', name: 'John', age: 30 },
    { id: '2', name: 'Mary', age: 40 },
    { id: '3', name: 'Igor', age: 20 },
    { id: '4', name: 'Mary', age: 50 },
  ];

  users$ = from(this.users).pipe(distinct((user) => user.name));

  constructor() {
    this.users$.subscribe((res) => {
      console.log(res);
    });
  }
}
