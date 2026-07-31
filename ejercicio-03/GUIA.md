# Ejercicio 03 — TypeScript sobre el código de Fase 3

Primer contacto real con TypeScript. Tomamos el mismo código que ya escribiste en JS y le agregamos tipos. La lógica ya funciona — el trabajo es solo de tipado.

## Setup (ya hecho)

- `package.json` con TypeScript y tsx como devDependencies.
- `tsconfig.json` con `strict: true` y `noImplicitAny: true` (para que TS sea intolerante con lo no tipado — es el modo que se usa en cualquier proyecto profesional, Angular incluido).
- `fase-3.ts` con el código a tipar.

## Cómo correr

Desde `ejercicio-03/`:

```bash
# Compilar solo (chequea tipos, escribe .js en dist/)
npx tsc

# Ejecutar directamente el .ts
npx tsx fase-3.ts
```

Mientras haya errores de tipo, `npx tsc` va a fallar y `tsx` también. Cuando todo esté tipado correctamente, vas a ver el output esperado en consola.

## Los 5 TIPOs para completar

1. **Definir la interface `Producto`** con id, name, price, stock. Y descomentar la anotación `Producto[]` en `products`.
2. **Tipar `name`** en `findProductByName`.
3. **Tipar `id`** en `getProductPrice`.
4. **Tipar `product` y `percentage`** en `applyDiscount` (para product usá tu interface).
5. **Tipar `products` (array) y `maxPrice`** en `getBudgetProducts`.

Los retornos podés dejarlos que TS los infiera (más idiomático). Solo tipá los parámetros.

## Cómo trabajar

1. Abrí `fase-3.ts` en VS Code. Vas a ver puntitos rojos y líneas onduladas — cada uno es un error de tipo. Pasá el mouse por encima para leer la queja.
2. Resolvé uno por uno. Después de cada cambio, corré `npx tsc` desde una terminal en la carpeta para ver qué queda pendiente.
3. Cuando `npx tsc` no muestre errores, corré `npx tsx fase-3.ts` para verificar que el script sigue funcionando igual que en JS.
4. Borrá los comentarios `// COMPLETAR` y `// TIPO N` cuando termines.
5. Commit y push:
   ```bash
   git add ejercicio-03/
   git commit -m "Ejercicio 03: tipado completo de fase-3.ts"
   git push
   ```
6. Avisame acá.

## Reglas

- **Autocompletado apagado** (esto es especialmente importante ahora — TS y Copilot juntos hacen que el editor casi te escriba solo).
- Sin buscar en internet.
- Si un error de TS no lo entendés, copiámelo tal cual y lo desciframos juntos.

## Después de este ejercicio

- **Ejercicio 04**: primer proyecto Angular. Node ya lo tenés.
