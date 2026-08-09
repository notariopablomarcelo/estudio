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
  readonly buscarItemEstado = signal<'todas' | 'completadas' | 'pendientes'>('todas');

  readonly tareasFiltradas = computed(() => {
    let tareas = this.svc.tareas();

    if (this.buscarItemEstado() !== 'todas'){
      if (this.buscarItemEstado() === 'completadas') {
        tareas = this.svc.tareas().filter(t => t.done);
      }
      if (this.buscarItemEstado() === 'pendientes') {
        tareas = this.svc.tareas().filter(t => !t.done);
      }
    }

    return tareas.filter(t => t.nombre.toLowerCase().includes(this.buscarItem().toLowerCase()));
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
}
