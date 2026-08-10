import { computed, Injectable, signal } from '@angular/core';

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

    readonly pendientes = computed(() => {
        return this.tareas().filter(t => !t.done).length;
    })

    agregar(nombre: string) {
        const t = {
            id: Date.now(),
            nombre: nombre,
            done: false
        }
        this.tareas.update(tareas => [...tareas, t]);
    }

    toggle(id: number) {
        this.tareas.update(tareas => tareas.map(t => {
            if (t.id !== id) return t;

            return { ...t, done: !t.done };
        }));
    }

    eliminar(id: number) {
        this.tareas.update(tareas => tareas.filter(t => t.id !== id ));
    }
}