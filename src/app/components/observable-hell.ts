import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-observable-hell',
  imports: [RouterLink],
  templateUrl: './observable-hell.html',
})
export class ObservableHell {
  id = 1;

  getUser(id: number) {
    return of({ id: 1, name: 'Jack', slug: 'jack' });
  }

  getDetails(slug: string) {
    return of({ age: 30, isActive: false });
  }

  constructor() {
    this.getUser(this.id).subscribe((user) =>
      this.getDetails(user.slug).subscribe((userDetails) => {
        console.log(
          `${user.name} is ${userDetails.age} years old and is ${userDetails.isActive ? '' : 'not'} active.`,
        );
      }),
    );
  }
}
