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

  // TODO 2: agregá acá un signal `nombre` (protected readonly) con un valor
  // inicial cualquiera — tu nombre, un apodo, lo que quieras.
  // Ejemplo de forma: protected readonly xxxx = signal('...');

  // TODO 3: agregá acá un `estado` con `computed` que devuelva:
  //   - 'positivo'  si counter() > 0
  //   - 'negativo'  si counter() < 0
  //   - 'cero'      si counter() === 0
  //
  // Sintaxis de computed:
  //   protected readonly foo = computed(() => otroSignal() + 1);
  //
  // Un computed es un signal DERIVADO: se recalcula solo cuando cambian los
  // signals que usás adentro. Se lee con foo() igual que un signal normal.
  // No tiene .set() ni .update() — es de solo lectura.

  increment() {
    this.counter.update(n => n + 1);
  }

  decrement() {
    this.counter.update(n => n - 1);
  }

  reset() {
    this.counter.set(0);
  }

  // TODO 1: agregá un método `double()` que multiplique el counter por 2.
  // Usá .update() con una arrow function. Es de una sola línea.
}
