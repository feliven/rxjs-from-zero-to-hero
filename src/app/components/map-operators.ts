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
    // const innerAndOuterObservable$ = from([1, 2, 3, 4, 5]).pipe(
    //   mergeMap((value) => of(value).pipe(delay(value * 1000))),
    // );

    // innerAndOuterObservable$.subscribe({
    //   next: console.log,
    //   error: () => {},
    //   complete: () => {
    //     console.log(`mergeMap complete`);
    //   },
    // });

    const mergedObservable$ = new Observable(() => {
      of(1)
        .pipe(delay(1 * 1000))
        .subscribe(console.log);
      of(2)
        .pipe(delay(2 * 1000))
        .subscribe(console.log);
      of(3)
        .pipe(delay(3 * 1000))
        .subscribe(console.log);
      of(4)
        .pipe(delay(4 * 1000))
        .subscribe(console.log);
      of(5)
        .pipe(delay(5 * 1000))
        .subscribe(console.log);
    });

    mergedObservable$.subscribe();

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
