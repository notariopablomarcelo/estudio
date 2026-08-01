import { Component, signal, computed, input, output, effect } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  // input() = lo que el padre le pasa al hijo. Es un signal de solo lectura.
  readonly label = input<string>('Contador con signals');

  // output() = evento que el hijo emite hacia el padre.
  readonly valueChange = output<number>();

  // Estado interno del componente (NO se comparte con nadie afuera).
  protected readonly counter = signal(0);
  protected readonly estado = computed(() => {
    if (this.counter() > 0) return 'positivo';
    if (this.counter() < 0) return 'negativo';
    return 'cero';
  });

  constructor() {
    // effect() = corre cada vez que cambia algún signal que se lee adentro.
    // Como leemos counter(), cada set/update dispara este effect y emitimos.
    effect(() => this.valueChange.emit(this.counter()));
  }

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
