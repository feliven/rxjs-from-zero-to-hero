import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, firstValueFrom, from, fromEvent, map, Observable, of } from 'rxjs';
import { CustomObserver } from './custom-observer';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

type Curso = {
  data_criacao: Date;
  nome_curso: string;
  descricao: string;
  categoria: string;
  id: number;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs-udemy');

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
    );

    resultadoAPI$.subscribe((cursos) => {
      console.log(cursos[0]);
      cursos.forEach((curso) => {
        console.log(curso.id);
        console.log(curso.data_criacao.toLocaleDateString());
      });
    });
  }
}
