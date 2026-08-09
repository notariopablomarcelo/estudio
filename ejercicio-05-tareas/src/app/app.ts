import { Component, signal, inject, computed } from '@angular/core';
import { TareasService } from './tareasService';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  readonly svc = inject(TareasService);

  readonly buscarItem = signal('');

  readonly tareasFiltradas = computed(() => {
    return this.svc.tareas().filter(t => t.nombre.toLowerCase().includes(this.buscarItem().toLowerCase()));
  })
  
  agregar(input: HTMLInputElement) {
    const value = input.value.trim();

    if (!value) return;

    this.svc.agregar({
      id: Date.now(),
      nombre: value,
      done: false
    });

    input.value = '';
  }

  eliminar(id: number) {
    this.svc.eliminar(id);
  }

  buscar(value: string) {
    this.buscarItem.set(value);
  }
}
