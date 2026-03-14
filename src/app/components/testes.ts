import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../types';

@Component({
  selector: 'app-testes',
  imports: [RouterLink],
  templateUrl: './testes.html',
})
export class Testes {
  subject$ = new Subject<User>();

  constructor() {
    this.subject$.subscribe((user) => console.log(user));

    this.subject$.next({ Id: '1', FirstName: 'Hello' });

    setTimeout(() => {
      this.subject$.next({ Id: '2', FirstName: 'World' });
    }, 1000);

    const user$ = this.subject$.asObservable();

    user$.subscribe((user) => console.log(user));
  }
}
