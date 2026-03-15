import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { concatMap, map, mergeMap, of } from 'rxjs';

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
    const result$ = this.getUser(this.id).pipe(
      concatMap((user) =>
        this.getDetails(user.slug).pipe(
          map((userDetails) => {
            console.log(
              `${user.name} is ${userDetails.age} years old and is ${userDetails.isActive ? '' : 'not'} active.`,
            );
          }),
        ),
      ),
    );

    result$.subscribe();

    // this.getUser(this.id).subscribe((user) =>
    //   this.getDetails(user.slug).subscribe((userDetails) => {
    //     console.log(
    //       `${user.name} is ${userDetails.age} years old and is ${userDetails.isActive ? '' : 'not'} active.`,
    //     );
    //   }),
    // );
  }
}
