import { Component, signal, inject } from '@angular/core';
import { TareasService } from './tareasService';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  readonly svc = inject(TareasService);
  
  agregar(input: HTMLInputElement) {
    const value = input.value.trim();

    if (value === '') return;

    this.svc.agregar({
      id: Date.now(),
      nombre: value,
      done: false
    });

    input.value = '';
  }
}
