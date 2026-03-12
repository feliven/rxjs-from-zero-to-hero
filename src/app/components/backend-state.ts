import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

interface IBackendState {
  api_url: string;
  real_views: number;
  roles: string[];
}

interface State {
  apiUrl: string;
  realViews: number;
  roles: string[];
}

@Component({
  selector: 'app-backend-state',
  imports: [RouterLink],
  templateUrl: './backend-state.html',
})
export class BackendState {
  http = inject(HttpClient);

  backendState$: Observable<IBackendState | null> = new Observable((observer) => {
    observer.next(null);

    setTimeout(() => {
      observer.next({
        api_url: 'http://localhost:3004',
        real_views: 1000,
        roles: ['admin', 'dev'],
      });
    }, 2000);
  });

  state: State | undefined;

  constructor() {
    const backendStateExistente$ = this.backendState$.pipe(
      filter((backendState) => {
        return !!backendState;
      }),
    );

    const backendStateSalvo$ = backendStateExistente$.pipe(
      map((backendState) => {
        return backendState;
      }),
    );

    backendStateSalvo$.subscribe((backendState) => {
      console.log('backendState:', backendState);
    });

    // alternativa mais enxuta:

    const novoBackendStateSalvo$ = this.backendState$
      .pipe(
        filter((backendState) => {
          return !!backendState;
        }),
        map((backendState) => {
          return backendState;
        }),
      )
      .subscribe((backendState) => {
        console.log('novoBackendState:', backendState);
      });
  }
}
