import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { distinctUntilChanged, filter, from, map, toArray } from 'rxjs';

@Component({
  selector: 'app-car-task',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './car-task.html',
})
export class CarTask {
  cars = [
    { id: '1', name: 'Shadow', color: 'black' },
    { id: '2', name: 'Midnight', color: 'black' },
    { id: '3', name: 'Ruby', color: 'red' },
    { id: '4', name: 'Snowball', color: 'white' },
  ];

  cars$ = from(this.cars);

  // 1. only emit cars with black or red color

  blackOrRedCars$ = this.cars$.pipe(
    filter((car) => car.color === 'black' || car.color === 'red'),
    toArray(),
  );

  // 2. only get the colors

  carColors$ = this.cars$.pipe(
    map((car) => car.color),
    toArray(),
  );

  // 3. only emit new value if different from previous one

  distinctCars$ = this.cars$.pipe(
    distinctUntilChanged((prev, curr) => prev.name === curr.name || prev.color === curr.color),
    toArray(),
  );

  filteredCarColors$ = this.cars$.pipe(
    filter((car) => car.color === 'black' || car.color === 'red'),
    map((car) => car.color),
    distinctUntilChanged(),
    toArray(),
  );
}
