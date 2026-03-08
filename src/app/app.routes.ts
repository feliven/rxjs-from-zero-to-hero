import { Routes } from '@angular/router';
import { Home } from './components/home';
import { Cursos } from './components/cursos';
import { Counter } from './components/counter';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'cursos', component: Cursos },
  { path: 'counter', component: Counter },
];
