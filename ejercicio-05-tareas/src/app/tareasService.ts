import { Injectable, signal } from '@angular/core';

interface Tarea {
    id: number,
    nombre: string,
    done: boolean
}

@Injectable({
    providedIn: 'root'
})
export class TareasService {
    readonly tareas = signal<Tarea[]>([]);

    agregar(t: Tarea) {
        this.tareas.update(tareas => [...tareas, t]);
    }
}