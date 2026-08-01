# Ejercicio 04 — Primer proyecto Angular

Angular v22, TypeScript, standalone components.

## Fases

- ✅ **Fase 0** — Scaffold + dev server.
- ✅ **Fase 1** — Contador con signals (interpolación, event binding, signals: read / set / update).
- ✅ **Fase 2** — Extensión del contador: `nombre`, `computed`, botón ×2.
- 👉 **Fase 3** — Nuevo control flow: `@for`, `@empty`, `@if`.

## Fase 3: Renderizar una lista

Ya está en tu `app.ts`:

- Una `interface Producto`.
- Un signal `productos` tipado como `Producto[]` (con datos iniciales).
- Métodos `agregarProducto()` y `vaciarProductos()`.

En el template, agregué la sección `.productos` con los botones de "Agregar" y "Vaciar" ya conectados, pero **la lista de productos y el @if no están renderizados todavía** — están como TODOs. Tenés que escribir los bloques `@for` y `@if`.

### El cambio más importante entre v12 y v22

| v12 | v22 |
|---|---|
| `*ngFor="let p of productos"` | `@for (p of productos(); track p.id) { ... }` |
| `*ngIf="condicion"` | `@if (condicion) { ... }` |
| No hay bloque "vacío" en `*ngFor` | `@for { ... } @empty { ... }` |
| `[ngSwitch]` | `@switch (valor) { @case (x) { } @default { } }` |
| Necesitás importar `CommonModule` | Ya viene incluido, no necesitás importar nada |

**El `@` no es un decorator** — es una convención sintáctica nueva de Angular para bloques de control flow. Se parece más a plantillas modernas (Handlebars, Vue) que al viejo `*directive`.

### Sintaxis explicada

**`@for`** — iterar:

```html
@for (p of productos(); track p.id) {
  <div>{{ p.name }}</div>
} @empty {
  <p>No hay nada.</p>
}
```

- **`p of productos()`** — como el `for...of` de JS. Notá el `()` porque `productos` es un signal.
- **`track p.id`** — **obligatorio**. Le dice a Angular cómo identificar cada item para redibujar solo lo que cambió. Casi siempre es un `id` único. Si no tenés id, podés usar `track $index`.
- **`@empty`** — bloque opcional que se muestra si la colección está vacía. Reemplaza los workarounds con `*ngIf` que hacías antes.

**`@if`** — condicional:

```html
@if (productos().length > 0) {
  <p>Tenés {{ productos().length }} producto(s).</p>
} @else if (cargando()) {
  <p>Cargando…</p>
} @else {
  <p>Sin productos.</p>
}
```

- `@else if` y `@else` son opcionales.
- Podés anidarlos sin problemas.

### Los 2 TODOs

Están dentro de `app.html`:

1. **TODO 1**: escribí el `@for` con `@empty` (código listo en el comentario, tenés que copiarlo del comentario al lugar correcto y borrar el comentario).
2. **TODO 2**: agregá una línea con `@if` que muestre la cantidad de productos cuando la lista no está vacía.

### Cómo trabajar

1. Editá `app.html` — completá los dos TODOs.
2. Guardá — el navegador se recarga solo.
3. Verificá:
   - Ves la lista con los 5 productos iniciales.
   - Arriba de la lista aparece "Tenés 5 producto(s)."
   - Al hacer clic en **Vaciar**: la lista desaparece, aparece "No hay productos." y desaparece el contador de arriba.
   - Al hacer clic en **+ Agregar** varias veces: aparecen "Producto nuevo" al final.
4. Borrá los comentarios TODO.
5. Commit y push.

### Reglas

- Sin autocompletado.
- Si Angular tira error en el navegador (pantalla roja o similar), copiámelo tal cual.

## Después

- **Ejercicio 05**: componentes hijos, inputs, outputs — descomponer esta app en piezas separadas.
