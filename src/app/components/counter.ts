import { Component, OnDestroy, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './counter.html',
})
export class Counter implements OnDestroy {
  interval$ = interval(1000);
  intervalSubscription = signal<Subscription>(new Subscription());

  constructor() {
    this.intervalSubscription.set(
      this.interval$.subscribe((i) => {
        console.log(i);
      }),
    );
  }

  ngOnDestroy(): void {
    this.intervalSubscription().unsubscribe();
  }
}
