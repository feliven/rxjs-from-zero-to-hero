import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo',
  imports: [RouterLink],
  templateUrl: './todo.html',
})
export class Todo {}
