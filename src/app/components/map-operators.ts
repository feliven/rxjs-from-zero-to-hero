import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { delay, from, map, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-map-operators',
  imports: [RouterLink],
  templateUrl: './map-operators.html',
})
export class MapOperators {
  constructor() {
    const innerAndOuterObservable$ = from([1, 2, 3, 4, 5]).pipe(
      mergeMap((value) => of(value).pipe(delay(value * 1000))),
    );

    innerAndOuterObservable$.subscribe({
      next: console.log,
      error: () => {},
      complete: () => {
        console.log(`mergeMap complete`);
      },
    });

    // from([1, 2, 3, 4, 5])
    //   .pipe(mergeMap((x: any) => of(x).pipe(delay(500))))
    //   .subscribe({
    //     next: console.log,
    //     error: () => {},
    //     complete: () => {
    //       console.log(`${mergeMap.name} completed`);
    //     },
    //   });

    // const example = (operator: any) => () => {
    //   from([1, 2, 3, 4, 5])
    //     .pipe(operator((x: any) => of(x).pipe(delay(500))))
    //     .subscribe({
    //       next: console.log,
    //       error: () => {},
    //       complete: () => {
    //         console.log(`${operator.name} completed`);
    //       },
    //     });
    // };

    // example(mergeMap)();
  }
}
