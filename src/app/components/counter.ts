import { Component, OnDestroy, signal } from '@angular/core';
import { interval, Subscription, take, takeWhile } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './counter.html',
})
export class Counter {
  interval$ = interval(1000);
  intervalSubscription = signal<Subscription>(new Subscription());

  constructor() {
    this.interval$.pipe(takeWhile((i) => i < 5)).subscribe((i) => {
      console.log(i);
    });
  }
}
