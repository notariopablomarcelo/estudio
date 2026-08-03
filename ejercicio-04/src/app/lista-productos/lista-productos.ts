import { Component, input, output } from '@angular/core';

interface Producto {
  id: number;
  name: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos {
  readonly productos = input.required<Producto[]>();
  
  readonly add = output();
  readonly clear = output();

  onAgregar() {
    this.add.emit();
  }

  onVaciar() {
    this.clear.emit();
  }
}
