import { Component, OnDestroy, signal } from '@angular/core';
import { interval, Subject, Subscription, take, takeUntil, takeWhile } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './counter.html',
})
export class Counter implements OnDestroy {
  interval$ = interval(1000);
  unsubscribe$ = new Subject<void>();

  constructor() {
    this.interval$.pipe(takeUntil(this.unsubscribe$)).subscribe((i) => {
      console.log(i);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
