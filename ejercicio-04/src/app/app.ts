import { Component, signal } from '@angular/core';
import { Contador } from './contador/contador';
import { ListaProductos } from './lista-productos/lista-productos';

interface Producto {
  id: number;
  name: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-root',
  imports: [Contador, ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Mi primera app Angular');
  protected readonly nombre = signal('Pablo');

  // Guardamos el último valor que emitió el hijo <app-contador>.
  protected readonly ultimoValorContador = signal(0);

  protected readonly productos = signal<Producto[]>([
    { id: 1, name: 'Café en grano',            price: 4500,  stock: 12 },
    { id: 2, name: 'Molinillo manual',         price: 18000, stock: 3  },
    { id: 3, name: 'Filtros V60 (paquete)',    price: 2200,  stock: 0  },
    { id: 4, name: 'Cafetera prensa francesa', price: 24000, stock: 5  },
    { id: 5, name: 'Café molido',              price: 5000,  stock: 20 },
  ]);

  // Handler del output del hijo. El $event que llega es el number emitido.
  onCounterChange(value: number) {
    this.ultimoValorContador.set(value);
  }

  agregarProducto() {
    const nuevo: Producto = {
      id: Date.now(),
      name: 'Producto nuevo',
      price: 1000,
      stock: 1,
    };
    this.productos.update(lista => [...lista, nuevo]);
  }

  vaciarProductos() {
    this.productos.set([]);
  }
}
