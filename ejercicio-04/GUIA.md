# Ejercicio 04 — Primer proyecto Angular

Angular v22, TypeScript, standalone components. La versión que conocías (v12) queda **muy atrás** en varias cosas — vamos por partes.

## Qué se creó

El CLI generó ~25 archivos. Los importantes son:

```
ejercicio-04/
├── src/
│   ├── main.ts                 # entrypoint: arranca la app
│   ├── index.html              # la única página HTML servida
│   ├── styles.css              # estilos globales
│   ├── app/
│   │   ├── app.ts              # componente raíz (tu punto de partida)
│   │   ├── app.html            # template del componente raíz
│   │   ├── app.css             # estilos del componente raíz
│   │   ├── app.config.ts       # configuración de la app
│   │   └── app.spec.ts         # test del componente
│   └── public/favicon.ico
├── angular.json                # config del CLI (builds, dev server)
├── package.json                # deps y scripts npm
├── tsconfig.json               # config de TypeScript
└── .vscode/                    # settings recomendados para VS Code
```

Los que vas a tocar el 90% del tiempo: `app.ts`, `app.html`, `app.css`.

## Notación nueva (importante)

Si conocías Angular 12, esto te va a llamar la atención:

| v12 (viejo) | v22 (nuevo) |
|---|---|
| `app.component.ts` | `app.ts` |
| `app.component.html` | `app.html` |
| `app.module.ts` | ya no existe |
| `@NgModule({...})` | ya no existe |
| Global `main.ts` con `platformBrowserDynamic` | `bootstrapApplication(App, appConfig)` |
| `*ngIf`, `*ngFor` | `@if`, `@for` |
| `@Input()` (decorator) | `input()` (función) |
| `EventEmitter` + `@Output()` | `output()` (función) |
| Servicios con `BehaviorSubject` | `signal()` |

Nada de esto lo vas a hacer todavía — solo tenélo presente cuando aparezca.

## El componente raíz explicado

Abrí `src/app/app.ts`. Solo tiene 11 líneas:

```ts
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicio-04');
}
```

Traducción línea por línea:

- **`import { Component, signal } from '@angular/core'`** — trae dos cosas del core de Angular: el decorator `Component` y la función `signal`.
- **`@Component({...})`** — decorator que marca esta clase como componente. Le decís: cuál es su selector HTML, qué otros componentes usa (`imports`), y dónde vive su template y sus estilos.
- **`selector: 'app-root'`** — dentro de otro HTML, este componente se invoca como `<app-root></app-root>`. Miralo en `src/index.html`.
- **`export class App`** — es una clase (recordá `class`, `constructor`, `this` de la teoría).
- **`title = signal('ejercicio-04')`** — crea un **signal**, la nueva forma reactiva de manejar estado. Es como una "caja" con un valor: para leerlo, hacés `title()`; para cambiarlo, `title.set(nuevoValor)`.

## Cómo correrlo

Desde la carpeta `ejercicio-04/`:

```bash
npm start
```

Va a compilar la app y levantar un servidor local. En unos segundos verás algo como:

```
➜  Local:   http://localhost:4200/
```

Abrí esa URL en el navegador. Vas a ver la **página de bienvenida de Angular** — es un template genérico que el CLI dejó como placeholder mientras aprendés.

**Dejalo corriendo mientras trabajás**. Cada vez que guardes un archivo, Angular recompila y actualiza la página automáticamente (hot reload). Es una de las cosas más satisfactorias del stack.

Para detener el servidor: `Ctrl+C` en la terminal.

## Qué hacer ahora

**No modifiques nada todavía.** Primero:

1. Corré `npm start` desde `ejercicio-04/`.
2. Abrí `http://localhost:4200/` en el navegador.
3. Confirmá que ves la página de bienvenida.
4. Avisame acá.

Después vamos a hacer la primera modificación — reemplazar la página de bienvenida por algo tuyo, muy simple.

## Reglas

- No corras `ng generate` ni nada del CLI todavía. Yo te voy guiando.
- Sin autocompletado.
- Si algo no compila o el navegador muestra un error, copiámelo tal cual acá.
