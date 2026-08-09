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
  readonly pendientes = computed(() => {
    return this.svc.tareas().filter(t => !t.done).length;
  })

  readonly tareasFiltradas = computed(() => {
    const todas = this.svc.tareas();
    const estado = this.buscarItemEstado();
    const texto = this.buscarItem().toLowerCase();

    const porEstado = 
      estado === 'completadas' ? todas.filter(t => t.done)
      : estado === 'pendientes' ? todas.filter(t => !t.done)
      : todas;

    return porEstado.filter(t => t.nombre.toLowerCase().includes(texto));
  });
  
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
}
