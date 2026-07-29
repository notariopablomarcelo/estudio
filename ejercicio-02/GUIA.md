# Ejercicio 02 — JavaScript moderno (parte 1)

Refresco de sintaxis y patrones que vas a usar todo el tiempo en Angular (o cualquier framework moderno).

## Cómo correr el código

1. Abrí `ejercicio-02/index.html` en el navegador.
2. **F12** → pestaña **Console**.
3. Vas a ver el output de los `console.log`.

## Fase 1: Leer y explicar ✅

5/5 con matices. Distinguiste bien const/let a nivel de referencia (nailed lo de mutabilidad interna), agarraste destructuring, filter/map/chain y arrow function. Los conceptos nuevos que sumamos: rest vs spread (misma sintaxis, roles opuestos), inmutabilidad como patrón, y el `this` léxico de las arrow functions.

## Fase 2: Modificar (acá estás)

Abrí `script.js`. Vas a encontrar **4 TODOs** distribuidos en el archivo. Cada uno introduce o ejercita un concepto:

1. **Agregar un producto** — repaso de object literal.
2. **Modificar el filtro `inStock`** — combinación de condiciones con `&&`.
3. **Sumar valor total de stock con `.reduce()`** — método nuevo, tenés pista.
4. **Ordenar por precio sin mutar el array** — método `.sort()` + inmutabilidad + posición correcta en la cadena.

Los 3 primeros son directos. El 4 requiere pensar dónde meter el sort en la cadena.

## Cómo trabajar

1. Editá `script.js` en VS Code.
2. Después de cada TODO resuelto, refrescá el navegador (`index.html`) y mirá la consola para verificar que sigue funcionando.
3. Cuando termines los 4, borrá los comentarios `// TODO ...` y las pistas (ya no hacen falta).
4. Commit y push:
   ```bash
   git add ejercicio-02/script.js
   git commit -m "Ejercicio 02 fase 2: TODOs resueltos"
   git push
   ```
5. Avisame acá y hago pull para revisar.

## Reglas

- Sin autocompletar (Copilot apagado).
- Sin buscar en internet — con las pistas que están en el archivo debería alcanzar. Si no, preguntame acá.
- Si te trabás con alguno, decime cuál y lo desatamos juntos.

## Después

- **Fase 3**: completar huecos (rellenar funciones parcialmente escritas).
- Fase 4 saltada.
