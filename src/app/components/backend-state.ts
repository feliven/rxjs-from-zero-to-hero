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

  state$: Observable<State> = this.backendState$.pipe(
    filter(Boolean),
    // the Boolean constructor can be used as a function that returns the truthiness of its argument
    map((backendState) => {
      return {
        apiUrl: backendState.api_url,
        realViews: backendState.real_views,
        roles: backendState.roles,
      };
    }),
  );

  constructor() {
    this.state$.subscribe((backendState) => {
      console.log('state$:', backendState);
    });
  }
}
