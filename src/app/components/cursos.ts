import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { Curso } from '../types';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './cursos.html',
})
export class Cursos {
  enderecoAPI = 'https://696cf048f4a79b31518025cf.mockapi.io/api/cursos';

  private http = inject(HttpClient);

  cursos$ = this.http.get<Curso[]>(this.enderecoAPI);

  constructor() {
    const resultadoAPI$ = this.cursos$.pipe(
      map((cursos) =>
        cursos.map((curso) => ({
          ...curso,
          id: Number(curso.id),
          data_criacao: new Date(curso.data_criacao),
        })),
      ),
      catchError((error) => {
        console.log(error);
        return of([]);
      }),
    );

    resultadoAPI$.subscribe({
      next: (cursos) => {
        console.log(cursos[0]);
        cursos.forEach((curso) => {
          console.log(curso.id);
          console.log(curso.data_criacao.toLocaleDateString());
        });
      },

      error: (error) => {
        console.log(error);
      },
    });
  }
}
