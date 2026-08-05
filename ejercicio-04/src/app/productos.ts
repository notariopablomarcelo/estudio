import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Producto {
  id: number;
  name: string;
  price: number;
  stock: number;
}

// Shape que devuelve la API dummyjson.com/products.
// La declaramos solo internamente para tipar el response y después mapear a Producto.
interface DummyProduct {
  id: number;
  title: string;
  price: number;
  stock: number;
}

interface DummyProductsResponse {
  products: DummyProduct[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private readonly http = inject(HttpClient);

  readonly productos = signal<Producto[]>([]);
  readonly cargando = signal(false);
  readonly error = signal<string | null>(null);

  cargar() {
    this.cargando.set(true);
    this.error.set(null);

    this.http
      .get<DummyProductsResponse>('https://dummyjson.com/products?limit=10')
      .subscribe({
        next: (res) => {
          // Mapeo del shape de la API al shape que usamos en la app.
          const mapeados: Producto[] = res.products.map((p) => ({
            id: p.id,
            name: p.title,
            price: p.price,
            stock: p.stock,
          }));
          this.productos.set(mapeados);
          this.cargando.set(false);
        },
        error: () => {
          this.error.set('No pudimos cargar los productos. Revisá tu conexión.');
          this.cargando.set(false);
        },
      });
  }

  agregar() {
    const nuevo: Producto = {
      id: Date.now(),
      name: 'Producto nuevo',
      price: 1000,
      stock: 1,
    };
    this.productos.update((list) => [...list, nuevo]);
  }

  vaciar() {
    this.productos.set([]);
  }

  eliminar(id: number) {
    this.productos.update((list) => list.filter((p) => p.id !== id));
  }
}
