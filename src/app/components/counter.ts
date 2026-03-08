import { Component, OnDestroy, signal } from '@angular/core';
import { interval, Subject, Subscription, take, takeUntil, takeWhile } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Unsub } from '../unsub';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './counter.html',
})
export class Counter extends Unsub {
  interval$ = interval(1000);

  constructor() {
    super();
    this.interval$.pipe(takeUntil(this.unsubscribe$)).subscribe((i) => {
      console.log(i);
    });
  }
}
