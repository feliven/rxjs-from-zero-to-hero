import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { concatMap, delay, exhaustMap, from, mergeMap, of, switchMap } from 'rxjs';

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

    // from([1, 2, 3, 4, 5])
    //   .pipe(concatMap((x: any) => of(x).pipe(delay(1000))))
    //   .subscribe({
    //     next: console.log,
    //     error: () => {},
    //     complete: () => {
    //       console.log(`concatMap complete`);
    //     },
    //   });

    // from([1, 2, 3, 4, 5])
    //   .pipe(switchMap((x: any) => of(x).pipe(delay(1000))))
    //   .subscribe({
    //     next: console.log,
    //     error: () => {},
    //     complete: () => {
    //       console.log(`switchMap complete`);
    //     },
    //   });

    from([1, 2, 3, 4, 5])
      .pipe(exhaustMap((x: any) => of(x).pipe(delay(1000))))
      .subscribe({
        next: console.log,
        error: () => {},
        complete: () => {
          console.log(`exhaustMap complete`);
        },
      });

    // const example = (operator: any) => () => {
    //   from([1, 2, 3, 4, 5])
    //     .pipe(operator((x: any) => of(x).pipe(delay(500))))
    //     .subscribe({
    //       next: console.log,
    //       error: () => {},
    //       complete: () => {
    //         console.log(`${operator.name} complete`);
    //       },
    //     });
    // };

    // example(mergeMap)();
  }
}
