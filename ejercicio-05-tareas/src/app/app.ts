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
  
  agregar(nombre: string) {
    this.svc.agregar({
      id: 1,
      nombre: nombre
    });
  }
}
