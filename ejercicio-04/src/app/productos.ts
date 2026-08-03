import { Injectable, signal } from '@angular/core';

export interface Producto {
  id: number;
  name: string;
  price: number;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ProductosService {
  readonly productos = signal<Producto[]>([
    { id: 1, name: 'Café en grano',            price: 4500,  stock: 12 },
    { id: 2, name: 'Molinillo manual',         price: 18000, stock: 3  },
    { id: 3, name: 'Filtros V60 (paquete)',    price: 2200,  stock: 0  },
    { id: 4, name: 'Cafetera prensa francesa', price: 24000, stock: 5  },
    { id: 5, name: 'Café molido',              price: 5000,  stock: 20 },
  ]);

  agregar() {
    const nuevo: Producto = {
      id: Date.now(),
      name: 'Producto nuevo',
      price: 1000,
      stock: 1,
    };
    this.productos.update(list => [...list, nuevo]);
  }

  vaciar() {
    this.productos.set([]);
  }
}
