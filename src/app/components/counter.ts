import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './counter.html',
})
export class Counter {
  interval$ = interval(1000).pipe(takeUntilDestroyed());

  constructor() {
    this.interval$.subscribe((i) => {
      console.log(i);
    });
  }
}
