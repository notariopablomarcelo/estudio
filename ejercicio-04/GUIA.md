# Ejercicio 04 — Primer proyecto Angular

Angular v22, TypeScript, standalone components.


## Fases

- ✅ **Fase 0** — Scaffold + dev server.
- ✅ **Fase 1** — Contador con signals.
- ✅ **Fase 2** — `nombre`, `computed`, botón ×2.
- ✅ **Fase 3** — Nuevo control flow (`@for`, `@if`).
- ✅ **Fase 4a/b** — Componentes hijos: `<app-contador>` y `<app-lista-productos>`.
- ✅ **Fase 5a/b** — Extraer estado a `ProductosService` + método `eliminar`.
- 👉 **Fase 6a** — HTTP: traer productos de una API real.
- ⏳ **Fase 6b** — Un pequeño buscador/filtro sobre los datos cargados.


## Fase 6a: HTTP con dummyjson.com

Cambios que hice:

1. **`app.config.ts`** — agregué `provideHttpClient()` en los providers. Esto hace que `HttpClient` esté disponible para inyectar en cualquier lado.
2. **`productos.ts`** —
   - Inyecté `HttpClient`.
   - Agregué signals para estados: `cargando` y `error`.
   - Método `cargar()` que hace `GET` a `https://dummyjson.com/products?limit=10` y **mapea el response**.
   - Las interfaces `DummyProduct` y `DummyProductsResponse` describen lo que devuelve la API (usan `title`, no `name` — hay que mapear).
3. **`app.ts`** — inyecta el servicio y llama a `cargar()` en el constructor para disparar la carga apenas arranca la app.
4. **`lista-productos.html`** — muestra 3 estados posibles con `@if / @else if / @else`:
   - Cargando: "Cargando…"
   - Error: mensaje + botón de reintentar.
   - OK: lista + botones.
5. **`lista-productos.css`** — estilos para el estado de error, botón alineado, etc.


## Conceptos nuevos

### `HttpClient` y `provideHttpClient`

`HttpClient` es el servicio de Angular para hacer requests HTTP. Se inyecta como cualquier otro. Para que esté disponible, hay que registrarlo en la configuración de la app con `provideHttpClient()`.

En Angular v12 esto se hacía importando `HttpClientModule`. En v22 se hace con `provide...()` en el `ApplicationConfig`. Es el mismo patrón para casi todo lo que necesita "setup global" (router, animations, forms, etc.).


### `Observable<T>` en modo lectura

`http.get<T>(url)` devuelve un `Observable<T>` — no una promesa, no data directa. Es un stream que emitirá cuando la request se complete.

Para "escucharlo" usamos `.subscribe({ next, error })`:

```ts
this.http.get<Foo>(url).subscribe({
  next: (data) => { /* llegó la data */ },
  error: (err) => { /* falló */ },
});
```

Convención: cuando el observable representa un **evento one-shot** (como una request HTTP), `.subscribe` es lo pragmático. En el bloque de RxJS más adelante vas a ver operadores para transformar streams (`map`, `filter`, `switchMap`, etc.).


### Mapeo de la respuesta

La API `dummyjson.com/products` devuelve:

```json
{
  "products": [
    { "id": 1, "title": "iPhone", "price": 999, "stock": 94, ... },
    ...
  ],
  "total": 194, "skip": 0, "limit": 10
}
```

Notar dos cosas:

1. Los productos vienen adentro de una **propiedad `products`**, no en el root.
2. Cada producto usa **`title`**, nuestra app usa **`name`**.

Por eso el método `cargar()` hace `res.products.map(p => ({ ..., name: p.title, ...}))`. **Este mapeo es un patrón muy común**: el back devuelve una estructura, tu app usa otra, y el servicio traduce entre ambas. Nunca deberías pasarle DTOs crudos del back a la UI.


### Estados de carga

Tres signals para representar cualquier request:

```ts
readonly productos = signal<Producto[]>([]);
readonly cargando = signal(false);
readonly error = signal<string | null>(null);
```

En el template, con `@if / @else if / @else` mostrás un estado u otro. Es una **discriminated union en vivo**.


## Verificaciones en el navegador

1. Al recargar la página, ves brevemente "Cargando…" y después aparecen 10 productos con nombres reales (Essence Mascara, iPhone 9, etc.).
2. El botón "↻ Recargar desde API" trae la data de nuevo (podés eliminar algunos, apretar recargar, y vuelven).
3. Si estás sin internet o el endpoint falla: aparece el mensaje de error + un botón para reintentar.
4. El contador y su emit siguen funcionando.


## Preguntas de comprensión

1. ¿Por qué `HttpClient` necesita `provideHttpClient()` en `app.config.ts`? ¿Qué pasa si me olvido de eso al inyectarlo?
2. `http.get<DummyProductsResponse>(...)` usa un generic. ¿Para qué sirve? ¿Qué hace Angular con ese tipo?
3. En `cargar()` la línea `.subscribe({ next: ..., error: ... })` — ¿por qué HTTP es un Observable y no una Promise?
4. ¿Por qué mapeamos `p.title → p.name` acá adentro del service en lugar de dejarlo pasar tal cual y usar `p.title` en el template?


## Después de las preguntas: Fase 6b

Vas a agregar un **input de búsqueda** que filtra la lista mostrada:

1. Un signal en el service (o en el componente `ListaProductos`, lo que prefieras) llamado `filtro` inicializado en `''`.
2. Un `<input>` en el template arriba de la lista, que actualiza ese signal en el evento `(input)`. Sintaxis para pasar el valor tipeado: `(input)="algo.set($any($event.target).value)"` o mejor un método handler.
3. Un `computed` que devuelva `productos()` filtrados por nombre según el `filtro()`.
4. El template usa ese computed en el `@for` en vez de `svc.productos()`.

Cuando lo tengas, commit + push y avisá.
