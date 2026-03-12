import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Curso, User, UserData } from '../types';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-testes',
  imports: [RouterLink],
  templateUrl: './testes.html',
})
export class Testes {
  private http = inject(HttpClient);

  enderecoAPICursos = 'https://696cf048f4a79b31518025cf.mockapi.io/api/cursos';
  enderecoAPIUsers =
    'https://api.mockapi.com/api/v1/users?api_key=1f7fa9975ecf444e8d5b1dfba072c210';

  cursos$ = this.http.get<Curso[]>(this.enderecoAPICursos);
  users$ = this.http.get<UserData>(this.enderecoAPIUsers).pipe(
    map((userdata) => {
      return userdata.data;
    }),
  );

  constructor() {
    forkJoin({
      cursos: this.cursos$,
      users: this.users$,
    }).subscribe((res) => {
      console.log(res.cursos);
      console.log(res.users);
    });
  }
}
