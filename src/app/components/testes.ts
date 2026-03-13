import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { debounce, debounceTime, interval, timer } from 'rxjs';

@Component({
  selector: 'app-testes',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './testes.html',
})
export class Testes {
  formBuilder = inject(NonNullableFormBuilder);
  buscaForm = this.formBuilder.group({
    termoBusca: '',
  });

  constructor() {
    const termoBusca$ = this.buscaForm.get('termoBusca')?.valueChanges;

    termoBusca$?.pipe(debounceTime(500)).subscribe((termo) => console.log(termo));

    interval(1000)
      .pipe(debounce((value) => timer(value * 200)))
      .subscribe((value) => {
        console.log('valor:', value, 'tempo de debounce:', value * 200, 'ms');
      });
  }

  onBuscaSubmit() {
    console.log('submit');
  }
}
