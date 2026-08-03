import { Component, signal } from '@angular/core';
import { Contador } from './contador/contador';
import { ListaProductos } from './lista-productos/lista-productos';

@Component({
  selector: 'app-root',
  imports: [Contador, ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Mi primera app Angular');
  protected readonly nombre = signal('Pablo');

  // El último valor emitido por <app-contador>.
  protected readonly ultimoValorContador = signal(0);

  onCounterChange(value: number) {
    this.ultimoValorContador.set(value);
  }
}
