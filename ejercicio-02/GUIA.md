# Ejercicio 02 — JavaScript moderno (parte 1)

Refresco de sintaxis y patrones que vas a usar todo el tiempo en Angular (o cualquier framework moderno). El código de `script.js` está en el mismo estilo que vas a ver en un componente Angular real.

## Cómo correr el código

1. Abrí `ejercicio-02/index.html` en el navegador (doble clic).
2. Abrí DevTools con **F12** (o click derecho → Inspeccionar).
3. Andá a la pestaña **Console**.
4. Vas a ver el output de los `console.log`.

No necesitás Node ni instalar nada — el JavaScript corre directo en el navegador.

## Fase 1: Leer y explicar (sin escribir código)

Abrí `script.js` y respondé en el chat:

1. ¿Qué diferencia hay entre `const` y `let`? ¿Cuándo usarías uno y cuándo el otro?
2. ¿Qué hace `({ price, ...rest })` en el parámetro de la función `withTax`?
3. Dentro del `return` de esa misma función aparece `{ ...rest, price, ... }`. ¿Qué hace el `...rest` acá adentro? ¿Es lo mismo que en el parámetro o algo distinto?
4. Explicá qué hace la cadena `products.filter(inStock).map(withTax).map(formatLine)`. ¿En qué orden se ejecuta cada método y qué recibe/devuelve cada uno?
5. ¿Qué es una arrow function y en qué se diferencia de una `function` tradicional? Si no te acordás la diferencia técnica, contame al menos qué te sugiere leer `(x) => x * 2`.

## Reglas

- Sin buscar en internet.
- Si no te acordás algo, decilo tal cual. Es diagnóstico, no examen.
- No hace falta ejecutar el script para responder — con leerlo alcanza. Pero si te ayuda a visualizar, corrélo y mirá la salida en la consola.

## Después

- **Fase 2**: modificar el código.
- **Fase 3**: completar huecos.
- Saltamos Fase 4 (misma decisión que en Ejercicio 01: el boilerplate no vale la pena).
