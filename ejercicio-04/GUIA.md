# Ejercicio 04 — Primer proyecto Angular

Angular v22, TypeScript, standalone components.


## Fases

- ✅ **Fase 0** — Scaffold + dev server.
- ✅ **Fase 1** — Contador con signals.
- ✅ **Fase 2** — `nombre`, `computed`, botón ×2.
- ✅ **Fase 3** — Nuevo control flow (`@for`, `@if`).
- 👉 **Fase 4a** — Componentes hijos: extraje el contador a `<app-contador>`.
- ⏳ **Fase 4b** — Vas a crear vos `<app-lista-productos>` siguiendo el mismo patrón.


## Fase 4a: Contador extraído a componente hijo

Lo que hice:

1. Ejecuté `npx ng generate component contador --skip-tests` desde `ejercicio-04/`. El CLI generó tres archivos en `src/app/contador/`.
2. Moví toda la lógica del contador ahí adentro.
3. Le agregué un **input** y un **output** al componente.
4. En `App` importé `Contador`, lo usé con `<app-contador>` en el template, y agregué el handler del evento.

Abrí los archivos en este orden mientras leés:
- `src/app/contador/contador.ts`
- `src/app/contador/contador.html`
- `src/app/app.ts`
- `src/app/app.html`


## Lo nuevo: `input()`, `output()`, `effect()`

**`input()`** — declara una propiedad que **el padre le pasa al hijo**.

```ts
readonly label = input<string>('Contador con signals');
```

- Es un signal (se lee con `label()`).
- Es de **solo lectura** dentro del hijo. El padre es quien "manda".
- El `<string>` es el tipo. El `'...'` es el default si el padre no pasa nada.

**`output()`** — declara un evento que **el hijo emite hacia el padre**.

```ts
readonly valueChange = output<number>();
```

- No es un signal. Tiene un método `.emit(valor)` para disparar el evento.
- El `<number>` es el tipo del valor que se emite.

**`effect()`** — corre una función cada vez que cambia algún signal que se lee adentro.

```ts
constructor() {
  effect(() => this.valueChange.emit(this.counter()));
}
```

Como leemos `counter()` adentro del effect, cada vez que el counter cambie (por increment, reset, double), Angular vuelve a correr esta función y emite el nuevo valor. Es tipo `useEffect` de React si lo conocés.


## Cómo se conectan padre e hijo en el template

En `app.html`:

```html
<app-contador
  label="Contador con signals"
  (valueChange)="onCounterChange($event)">
</app-contador>
```

- **`label="..."`** — property binding con un string estático. Si el valor viniera de un signal, usarías `[label]="miSignal()"` con corchetes.
- **`(valueChange)="onCounterChange($event)"`** — event binding. `$event` es una variable especial del template: contiene lo que el hijo emitió (en nuestro caso, el número).

En `app.ts`:
```ts
onCounterChange(value: number) {
  this.ultimoValorContador.set(value);
}
```

El handler recibe el valor y lo guarda en un signal del padre. Ese signal se muestra arriba en el `<p>`.


## Verificaciones en el navegador

1. Ves el contador exactamente como antes.
2. Arriba del contador dice **"El contador está en X"** — ese número **cambia en tiempo real** cuando tocás los botones. Ese es el output funcionando.
3. La lista de productos y sus botones siguen andando igual.


## Preguntas de comprensión

1. ¿Por qué el `label` es `readonly`? ¿Qué pasaría si en el hijo intentáramos `this.label.set('otro')`?
2. Si en el template del padre escribís `[label]="'Hola'"` (con corchetes y comillas simples adentro) vs `label="Hola"` (sin corchetes), ¿es lo mismo? ¿En qué caso conviene usar cada forma?
3. ¿Por qué el `output()` no es un signal? ¿Qué diferencia hay conceptualmente con un signal?
4. Si borro el `effect()` del constructor del Contador, ¿la app rompe? ¿Qué deja de funcionar exactamente?


## Después de las preguntas: Fase 4b

Vas a crear vos `<app-lista-productos>`:

- Genera el componente con `ng generate component lista-productos --skip-tests`.
- Mové el `<section class="productos">` del padre al hijo.
- El hijo recibe **input** `productos: Producto[]` desde el padre.
- El hijo emite **outputs**: `add` (cuando tocan +Agregar) y `clear` (cuando tocan Vaciar).
- El padre queda como orquestador — es dueño del signal `productos` y tiene los handlers.

Cuando hayas contestado las 4 preguntas, te doy los detalles paso a paso.
