import { Component, computed, inject, signal } from '@angular/core';
import { ProductosService } from '../productos';

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos {
  // Ya no hay input ni output. El estado y las acciones viven en el servicio.
  protected readonly svc = inject(ProductosService);

  readonly filtro = signal('');

  readonly productosFiltrados = computed(() => {
    const q = this.filtro().toLowerCase().trim();
    if(!q) return this.svc.productos();
    return this.svc.productos().filter(p => p.name.toLowerCase().includes(q));
  });
}
