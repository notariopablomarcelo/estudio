# Ejercicio 04 — Primer proyecto Angular

Angular v22, TypeScript, standalone components.

## Fases

- ✅ **Fase 0** — Scaffold + dev server.
- ✅ **Fase 1** — Contador con signals (interpolación, event binding, signals: read / set / update).
- 👉 **Fase 2** — 3 TODOs para agregarle cosas al componente.

## Fase 2: Modificar

Tres tareas escritas como comentarios `TODO` dentro de `app.ts` y `app.html`.

### Los 3 TODOs

1. **`double()` + botón ×2** — método que multiplica el contador por 2 con `.update()`, más un botón nuevo en el template.
2. **Signal `nombre` + saludo en el h1** — un signal nuevo, y usarlo en el título con interpolación.
3. **Computed `estado`** — un signal derivado que dice si el contador es `'positivo'`, `'negativo'` o `'cero'`.

### Concepto nuevo: `computed`

Un `computed` es un **signal derivado** — su valor sale automáticamente de otros signals. Se recalcula cuando alguna dependencia cambia.

```ts
protected readonly foo = computed(() => otroSignal() + 1);
```

Diferencias con un signal normal:
- **Sin `.set()` ni `.update()`** — es de solo lectura. Vos declarás la fórmula, Angular la mantiene sincronizada.
- Se lee con `foo()` como cualquier signal.
- Puede depender de varios signals a la vez.

Ejemplo de uso típico:
```ts
protected readonly precio = signal(100);
protected readonly cantidad = signal(3);
protected readonly total = computed(() => precio() * cantidad());
```
`total()` va a valer 300 al inicio. Si cambia `precio` o `cantidad`, se recalcula solo.

### Cómo trabajar

1. Editá `app.ts` y `app.html` siguiendo los TODOs.
2. Guardá — el navegador se recarga solo con `npm start` corriendo.
3. Verificá en el navegador:
   - El botón ×2 duplica el número (probalo desde 5, y también desde -3, para ver que respeta el signo).
   - El h1 muestra tu nombre.
   - El texto de estado cambia según el signo del contador.
4. Borrá los comentarios `// TODO` y `<!-- TODO -->`.
5. Commit y push:
   ```bash
   git add ejercicio-04/src/app/app.ts ejercicio-04/src/app/app.html
   git commit -m "Ejercicio 04 fase 2: double, nombre, estado"
   git push
   ```
6. Avisame.

### Reglas

- Sin autocompletado.
- Sin buscar en internet — con las pistas de los TODOs y el concepto de `computed` arriba te alcanza.
- Si te trabás con alguno, decime cuál y lo desatamos.

## Después de esta fase

- **Fase 3**: introducir el nuevo control flow (`@if`, `@for`) mostrando una lista de productos.
