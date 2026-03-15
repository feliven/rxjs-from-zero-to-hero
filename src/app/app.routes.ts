import { Routes } from '@angular/router';

import { Home } from './pages/home';
import { Cursos } from './components/cursos';
import { Counter } from './components/counter';
import { Testes } from './components/testes';
import { BackendState } from './components/backend-state';
import { CarTask } from './components/car-task';
import { FormBusca } from './components/form-busca';
import { TesteTap } from './components/teste-tap';
import { Todo } from './components/todo';
import { MapOperators } from './components/map-operators';
import { ObservableHell } from './components/observable-hell';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'cursos', component: Cursos },
  { path: 'counter', component: Counter },
  { path: 'testes', component: Testes },
  { path: 'backendstate', component: BackendState },
  { path: 'cartask', component: CarTask },
  { path: 'form-busca', component: FormBusca },
  { path: 'teste-tap', component: TesteTap },
  { path: 'todo', component: Todo },
  { path: 'map-operators', component: MapOperators },
  { path: 'observable-hell', component: ObservableHell },
];
