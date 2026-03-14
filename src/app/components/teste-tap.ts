import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { debounceTime, filter, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-teste-tap',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './teste-tap.html',
})
export class TesteTap {
  interval$ = interval(1000).pipe(
    filter((valor) => {
      return valor % 2 === 0;
    }),
    tap((valor) => console.log('após filter:', valor)),
    debounceTime(1000),
    tap((valor) => console.log('após debounceTime:', valor)),
    map((valor) => valor + ' é um número par'),
    tap((valor) => console.log('após map:', valor)),
  );
}
