import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import { Curso } from '../types';

@Component({
  selector: 'app-root',
  imports: [RouterLink],
  templateUrl: './counter.html',
})
export class Counter {
  enderecoAPI = 'https://696cf048f4a79b31518025cf.mockapi.io/api/cursos';

  constructor() {
    ajax<Curso[]>(this.enderecoAPI).subscribe((result) => console.log(result.response));
  }
}
