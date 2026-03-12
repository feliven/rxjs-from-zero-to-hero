import { Routes } from '@angular/router';

import { Home } from './components/home';
import { Cursos } from './components/cursos';
import { Counter } from './components/counter';
import { Testes } from './components/testes';
import { BackendState } from './components/backend-state';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'cursos', component: Cursos },
  { path: 'counter', component: Counter },
  { path: 'testes', component: Testes },
  { path: 'backendstate', component: BackendState },
];
