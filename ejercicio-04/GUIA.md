# Ejercicio 04 — Primer proyecto Angular

Angular v22, TypeScript, standalone components.


## Fases

- ✅ **Fase 0** — Scaffold + dev server.
- ✅ **Fase 1** — Contador con signals.
- ✅ **Fase 2** — `nombre`, `computed`, botón ×2.
- ✅ **Fase 3** — Nuevo control flow (`@for`, `@if`).
- ✅ **Fase 4a/b** — Componentes hijos: `<app-contador>` y `<app-lista-productos>`.
- 👉 **Fase 5a** — Extraer estado a un servicio (`ProductosService`).
- ⏳ **Fase 5b** — Sumar un método `eliminar(id)` y un botón por producto.


## Fase 5a: Extraer estado a un servicio

Lo que hice:

1. `npx ng generate service productos --skip-tests` desde `ejercicio-04/`.
2. Escribí el servicio en `src/app/productos.ts`:
   - `interface Producto` (exportada — ahora es la única fuente).
   - `@Injectable({ providedIn: 'root' })` — singleton global.
   - Signal `productos` con los 5 items iniciales.
   - Métodos `agregar()` y `vaciar()`.
3. `App` quedó "adelgazada": ya no tiene el signal `productos` ni los métodos. Solo orquesta el saludo, el contador y renderiza `<app-lista-productos>`.
4. `App.html` ya no le pasa nada al hijo: `<app-lista-productos></app-lista-productos>`.
5. `ListaProductos` inyecta el servicio con `inject()` y consume signals/métodos directamente. Sin `input()` ni `output()`.

Abrí los archivos en este orden:

- `src/app/productos.ts` — el servicio.
- `src/app/app.ts` y `src/app/app.html` — cómo quedó el padre.
- `src/app/lista-productos/lista-productos.ts` y `.html` — cómo cambia el hijo.


## Lo nuevo

**`@Injectable({ providedIn: 'root' })`**

Marca la clase como servicio y le dice a Angular: "creá una única instancia (singleton) al arrancar la app, y compartila con cualquiera que la pida". No hace falta declararla en ningún módulo.

**`inject()`**

Alternativa moderna al constructor DI. Se puede usar como inicializador de un campo, dentro de signals, computed, effects, etc.

```ts
export class ListaProductos {
  protected readonly svc = inject(ProductosService);
}
```

Equivalente al viejo:

```ts
export class ListaProductos {
  constructor(private svc: ProductosService) {}
}
```

Ambas siguen siendo válidas. En código nuevo se prefiere `inject()`.

**Patrón "estado en servicio + signals"**

El servicio contiene los signals. Los componentes los leen directamente en sus templates (`svc.productos()`) y actualizan llamando a métodos (`svc.agregar()`). Sin input/output para este tipo de datos compartidos.


## Cuándo input/output vs cuándo servicio

- **input/output**: comunicación entre componentes cercanos (padre-hijo) sobre estado local. Ejemplo: el contador y su emit al padre.
- **Servicio**: estado compartido entre componentes que no tienen por qué conocerse. Ejemplo: la lista de productos que otros componentes (buscador, breadcrumb, carrito) también necesitarán.

**Regla mental**: si dos componentes que no comparten padre directo necesitan la misma data, es un servicio.


## Verificaciones en el navegador

1. Ves los 5 productos igual que antes.
2. Los botones "+ Agregar" y "Vaciar" funcionan.
3. El contador y su emit al padre siguen funcionando (no lo tocamos).
4. La estructura es la misma; solo cambió de dónde sale la data.


## Preguntas de comprensión

1. ¿Qué significa `providedIn: 'root'` y por qué (casi) siempre lo vas a usar?
2. `App` quedó sin las líneas de `productos`, `agregarProducto()` y `vaciarProductos()`. ¿Se rompió algo? ¿Por qué la app sigue funcionando exactamente igual?
3. En `lista-productos.ts` usé `inject(ProductosService)` en vez del constructor. ¿Qué caso permite `inject()` que el constructor no?
4. Si en otro componente (imaginate un `<app-buscador>`) hacés `inject(ProductosService)` y modificás el signal desde ahí, ¿qué le pasa a la vista de `<app-lista-productos>`?


## Después de las preguntas: Fase 5b

Vas a hacer vos:

1. En `ProductosService`, agregá un método `eliminar(id: number)` que saque de la lista el producto cuyo `id` coincida. Pista: `filter` + `set` sobre el signal.
2. En `lista-productos.html`, dentro del `@for`, agregá un botón `×` al lado de cada producto que llame a `svc.eliminar(p.id)`.
3. Verificá en el navegador: cada producto debería poder eliminarse individualmente, y al eliminar todos, aparecer el mensaje "No hay productos." (el `@empty` del `@for` ya está).
