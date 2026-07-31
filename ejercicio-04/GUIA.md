# Ejercicio 04 — Primer proyecto Angular

Angular v22, TypeScript, standalone components. La versión que conocías (v12) queda muy atrás en varias cosas — vamos por partes.

## Fases

- ✅ **Fase 0** — Scaffold + dev server corriendo (`npm start` en localhost:4200).
- 👉 **Fase 1** — Primera modificación real: un contador con signals.

## Fase 1: contador con signals

Reemplacé la página de bienvenida por algo funcional pero minimal: un título y un contador con tres botones (−1, reset, +1). El browser ya recargó solo — deberías verlo.

Los tres archivos que cambiaron:

- `src/app/app.ts` — la lógica del componente.
- `src/app/app.html` — el template.
- `src/app/app.css` — algo de estilo para que no sea horrible.

### Lo que introduce este cambio

**1. Interpolación** `{{ ... }}`

En el template escribís `{{ title() }}` y Angular reemplaza eso por el valor del signal cuando renderiza. Fijate que llamamos a `title()` **como función** — un signal siempre se lee invocándolo.

**2. Event binding** `(click)="metodo()"`

Los paréntesis en `(click)` significan "cuando ocurra el evento click, llamá a este método". Así se conectan eventos del DOM con la lógica de tu componente.

Fórmula general: `(evento)="metodo(args)"`.

Otros que vas a ver: `(input)`, `(submit)`, `(keyup)`, `(mouseenter)`, etc.

**3. Signals: read, set, update**

En `app.ts` tenés tres formas de tocar un signal:

| Operación | Ejemplo | Cuándo |
|---|---|---|
| Leer | `counter()` | leer el valor actual |
| Set (reemplazar) | `counter.set(0)` | asignar un valor nuevo directo |
| Update (transformar) | `counter.update(n => n + 1)` | derivar el nuevo valor del viejo |

**Nunca hagas `counter = 5`.** Un signal no es una variable normal, es un objeto con métodos. Si lo asignás con `=` rompés la reactividad.

## Preguntas de comprensión

Antes de modificar nada, respondeme:

1. En `app.html` hay `{{ title() }}` con paréntesis y `<h1>` sin paréntesis. ¿Qué diferencia hay entre esos dos usos de "title" y por qué uno lleva `()` y el otro no?
2. En un botón está escrito `(click)="increment()"`. ¿Qué representa cada parte? (los paréntesis alrededor de `click`, las comillas, `increment()` con paréntesis)
3. ¿Por qué `counter.update(n => n + 1)` es preferible a `counter.set(counter() + 1)` en este caso? (Pista: ambos "funcionan", pero uno es más idiomático.)
4. Si en el template escribo `<h1>{{ title }}</h1>` (sin los paréntesis), ¿qué crees que pasaría? ¿Qué mostraría Angular?

Cuando respondas, seguimos con Fase 2 (una modificación tuya sobre este componente).

## Reglas

- Sin autocompletado.
- Si algo no se ve, revisá que la terminal con `npm start` siga corriendo y no muestre errores en rojo.
