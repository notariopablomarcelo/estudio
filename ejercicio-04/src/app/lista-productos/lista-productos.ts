import { Component, inject } from '@angular/core';
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
}
