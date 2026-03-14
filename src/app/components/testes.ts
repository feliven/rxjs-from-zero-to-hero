import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../types';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-testes',
  imports: [RouterLink],
  templateUrl: './testes.html',
})
export class Testes {
  userService = inject(UserService);

  constructor() {
    this.userService.subject$.subscribe((user) => console.log(user));

    this.userService.subject$.next({ Id: '1', FirstName: 'Hello' });

    const valor1 = this.userService.subject$.getValue();

    console.log('valor1', valor1);

    setTimeout(() => {
      this.userService.subject$.next({ Id: '2', FirstName: 'World' });
    }, 1000);

    // const user$ = this.subject$.asObservable();

    // user$.subscribe((user) => console.log(user));
  }
}
