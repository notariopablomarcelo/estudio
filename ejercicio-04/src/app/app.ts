import { Component, signal, computed } from '@angular/core';

interface Producto {
  id: number;
  name: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Mi primera app Angular');
  protected readonly counter = signal(0);
  protected readonly nombre = signal('Pablo');
  protected readonly estado = computed(() => {
    if (this.counter() > 0) return 'positivo';
    if (this.counter() < 0) return 'negativo';
    return 'cero';
  });

  protected readonly productos = signal<Producto[]>([
    { id: 1, name: 'Café en grano',            price: 4500,  stock: 12 },
    { id: 2, name: 'Molinillo manual',         price: 18000, stock: 3  },
    { id: 3, name: 'Filtros V60 (paquete)',    price: 2200,  stock: 0  },
    { id: 4, name: 'Cafetera prensa francesa', price: 24000, stock: 5  },
    { id: 5, name: 'Café molido',              price: 5000,  stock: 20 },
  ]);

  increment() {
    this.counter.update(n => n + 1);
  }

  decrement() {
    this.counter.update(n => n - 1);
  }

  reset() {
    this.counter.set(0);
  }

  double() {
    this.counter.update(n => n * 2);
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
