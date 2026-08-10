import { Component, signal, inject, computed } from '@angular/core';
import { TareasService } from './tareasService';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  readonly svc = inject(TareasService);
  readonly fb = inject(FormBuilder);

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
  });

  readonly buscarItem = signal('');
  readonly buscarItemEstado = signal<'todas' | 'completadas' | 'pendientes'>('todas');

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
  
  agregar() {
    if (this.form.invalid) return;

    const value = this.form.value['nombre']?.trim();

    if (!value) return;

    this.svc.agregar(value);

    this.form.reset();
  }
}
