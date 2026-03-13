import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-car-task',
  imports: [RouterLink],
  templateUrl: './car-task.html',
})
export class CarTask {
  cars = [
    { id: '', name: 'Shadow', color: 'black' },
    { id: '', name: 'Midnight', color: 'black' },
    { id: '', name: 'Ruby', color: 'red' },
    { id: '', name: 'Snowball', color: 'white' },
  ];

  cars$ = from(this.cars);

  // 1. only emit cars with black or red color
  // 2. only get the colors
  // 3. only emit new value if different from previous one
}
