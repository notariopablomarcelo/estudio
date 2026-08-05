import { Component, inject, signal } from '@angular/core';
import { Contador } from './contador/contador';
import { ListaProductos } from './lista-productos/lista-productos';
import { ProductosService } from './productos';

@Component({
  selector: 'app-root',
  imports: [Contador, ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly productosService = inject(ProductosService);

  protected readonly title = signal('Mi primera app Angular');
  protected readonly nombre = signal('Pablo');
  protected readonly ultimoValorContador = signal(0);

  constructor() {
    // Disparamos la carga apenas arranca la app.
    this.productosService.cargar();
  }

  onCounterChange(value: number) {
    this.ultimoValorContador.set(value);
  }
}
