import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Mi primera app Angular');
  protected readonly counter = signal(0);

  increment() {
    this.counter.update(n => n + 1);
  }

  decrement() {
    this.counter.update(n => n - 1);
  }

  reset() {
    this.counter.set(0);
  }
}
