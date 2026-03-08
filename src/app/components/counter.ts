import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './counter.html',
})
export class Counter {
  interval$ = interval(1000);

  constructor() {
    this.interval$.subscribe((i) => {
      console.log(i);
    });
  }
}
