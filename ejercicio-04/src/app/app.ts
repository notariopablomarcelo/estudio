import { Component, signal } from '@angular/core';
// TODO 3: agregá `computed` a este import (viene del mismo paquete).

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
    if (this.counter() > 0 ) return 'positivo';
    if (this.counter() < 0 ) return 'negativo';
    return 'cero';
  })

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
}
