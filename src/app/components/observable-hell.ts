import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { concatMap, delay, from, map, Observable, of } from 'rxjs';

interface User {
  id: number;
  name: string;
  slug: string;
}

interface UserDetail {
  age: number;
  isActive: boolean;
}

@Component({
  selector: 'app-observable-hell',
  imports: [RouterLink],
  templateUrl: './observable-hell.html',
})
export class ObservableHell {
  id = 1;

  userIdList$ = from([1, 2, 3, 4, 5]);

  getUser(id: number): Observable<User> {
    const users: User[] = [
      { id: 1, name: 'Jack', slug: 'jack' },
      { id: 2, name: 'Jane', slug: 'jane' },
      { id: 3, name: 'Jill', slug: 'jill' },
      { id: 4, name: 'John', slug: 'john' },
      { id: 5, name: 'Jules', slug: 'jules' },
    ];

    const filteredUser = users.find((user) => user.id === id);

    return of(filteredUser!);
  }

  getDetails(slug: string): Observable<UserDetail> {
    const userDetails = [
      { slug: 'jack', age: 30, isActive: false },
      { slug: 'jane', age: 45, isActive: true },
      { slug: 'jill', age: 7, isActive: false },
      { slug: 'john', age: 88, isActive: true },
      { slug: 'jules', age: 13, isActive: true },
    ];

    const filteredDetail = userDetails.find((detail) => detail.slug === slug);

    const returnDetail: UserDetail = {
      age: filteredDetail?.age!,
      isActive: filteredDetail?.isActive!,
    };

    return of(returnDetail);
  }

  constructor() {
    const result$ = this.userIdList$.pipe(
      concatMap((userId) =>
        this.getUser(userId).pipe(
          concatMap((user) =>
            this.getDetails(user.slug).pipe(
              map((userDetails) => {
                console.log(
                  `${user.name} is ${userDetails.age} years old and is ${userDetails.isActive ? 'active' : 'not active'}.`,
                );
              }),
            ),
          ),
        ),
      ),
    );

    result$.subscribe();

    const delayedResult$ = this.userIdList$.pipe(
      concatMap((id) =>
        of(id).pipe(
          delay(1000),
          concatMap((userId) =>
            this.getUser(userId).pipe(
              concatMap((user) =>
                this.getDetails(user.slug).pipe(
                  map((userDetails) => {
                    console.log(
                      `${user.name} is ${userDetails.age} years old and is ${userDetails.isActive ? 'active' : 'not active'}.`,
                    );
                  }),
                ),
              ),
            ),
          ),
        ),
      ),
    );

    delayedResult$.subscribe();

    // this.getUser(this.id).subscribe((user) =>
    //   this.getDetails(user.slug).subscribe((userDetails) => {
    //     console.log(
    //       `${user.name} is ${userDetails.age} years old and is ${userDetails.isActive ? '' : 'not'} active.`,
    //     );
    //   }),
    // );
  }
}
