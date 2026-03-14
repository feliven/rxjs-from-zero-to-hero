import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../types';

@Component({
  selector: 'app-testes',
  imports: [RouterLink],
  templateUrl: './testes.html',
})
export class Testes {
  subject$ = new BehaviorSubject<User>({ Id: '0', FirstName: '' });

  constructor() {
    this.subject$.subscribe((user) => console.log(user));

    this.subject$.next({ Id: '1', FirstName: 'Hello' });

    const valor1 = this.subject$.getValue();

    console.log('valor1', valor1);

    setTimeout(() => {
      this.subject$.next({ Id: '2', FirstName: 'World' });
    }, 1000);

    // const user$ = this.subject$.asObservable();

    // user$.subscribe((user) => console.log(user));
  }
}
