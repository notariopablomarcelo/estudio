// -----------------------------------------------------------------------------
// Ejercicio 02 — Fase 3: completar huecos
//
// El array `products` es el mismo que ya conocés. Abajo hay 4 funciones con
// su signature escrita pero SIN cuerpo. Tenés que completar el cuerpo de cada
// una respetando lo que dice el comentario.
//
// Cada COMPLETAR te dice qué debe hacer la función y (cuando aplica) una pista
// del método o operador que conviene usar. Al final del archivo hay una zona
// "Zona de prueba" con console.log que ejecutan tus funciones — no la toques,
// solo mirá el resultado en la consola del navegador.
// -----------------------------------------------------------------------------

const products = [
  { id: 1, name: 'Café en grano',            price: 4500,  stock: 12 },
  { id: 2, name: 'Molinillo manual',         price: 18000, stock: 3  },
  { id: 3, name: 'Filtros V60 (paquete)',    price: 2200,  stock: 0  },
  { id: 4, name: 'Cafetera prensa francesa', price: 24000, stock: 5  },
  { id: 5, name: 'Café molido',              price: 5000,  stock: 20 },
];


// -----------------------------------------------------------------------------
// COMPLETAR 1: findProductByName(name)
//
// Recibe un string `name` y devuelve el objeto producto cuyo `name` coincida
// EXACTAMENTE con el argumento. Si no lo encuentra, debe devolver `undefined`.
//
// PISTA — usá el método .find() de arrays. Funciona parecido a .filter() pero
// devuelve el primer elemento que matchea (no un array).
//   ejemplo:  [1,2,3,4].find(n => n > 2)   // devuelve 3
//
// Esperado:
//   findProductByName('Café en grano')  →  el objeto del id 1
//   findProductByName('No existe')      →  undefined
// -----------------------------------------------------------------------------
const findProductByName = (name) => {
  // COMPLETAR: escribí acá el body (un solo return alcanza)
  return products.find(product => product.name === name);
};


// -----------------------------------------------------------------------------
// COMPLETAR 2: getProductPrice(id)
//
// Recibe un `id` y devuelve el `price` del producto correspondiente.
// Si no existe un producto con ese id, devuelve 0.
//
// CONCEPTOS NUEVOS:
//   - Optional chaining `?.` : accede a una propiedad sin romper si el objeto
//     es null o undefined.
//       ejemplo:  usuario?.direccion?.calle
//     Si `usuario` es undefined, no explota — devuelve undefined.
//
//   - Nullish coalescing `??` : devuelve el operando derecho SOLO si el
//     izquierdo es null o undefined.
//       ejemplo:  x ?? 'valor default'
//     Diferencia con `||`: `??` NO se activa con 0, '' o false. Solo con
//     null o undefined. En este caso importa porque 0 es un precio válido.
//
// Ejemplo esperado:
//   getProductPrice(1)    →  4500
//   getProductPrice(999)  →  0
// -----------------------------------------------------------------------------
const getProductPrice = (id) => {
  // PISTA: primero buscá el producto con .find(), después usá `?.price ?? 0`
  // para devolver el precio o 0 si el producto no existía.
  // (Podés hacerlo en una sola línea encadenando todo.)
  const product = products.find(p => p.id === id);
  return product?.price ?? 0;
};


// -----------------------------------------------------------------------------
// COMPLETAR 3: applyDiscount(product, percentage)
//
// Recibe un producto y un porcentaje de descuento (0-100) y devuelve un
// NUEVO objeto igual al original pero con el `price` reducido.
//
// IMPORTANTE: no mutés el producto original. Devolvé una copia con spread.
//
// Fórmula del nuevo precio:  price * (1 - percentage/100)
// Usá Math.round() para no dejar decimales feos.
//
// Ejemplo esperado:
//   applyDiscount({ id: 1, name: 'Café', price: 4500, stock: 12 }, 10)
//   →  { id: 1, name: 'Café', price: 4050, stock: 12 }
// -----------------------------------------------------------------------------
const applyDiscount = (product, percentage) => {
  // PISTA — la forma general de "copia con una propiedad modificada" es:
  //   { ...objetoOriginal, propiedad: nuevoValor }
  return { ...product, price: Math.round(product.price * (1 - percentage/100)) }
};


// -----------------------------------------------------------------------------
// COMPLETAR 4: getBudgetProducts(products, maxPrice)
//
// Recibe el array de productos y un precio máximo. Devuelve un array con
// solo los NOMBRES (strings) de los productos que cuesten menos o igual que
// maxPrice.
//
// Combina filter + map en una cadena (algo que ya hiciste en fases anteriores).
//
// Ejemplo esperado:
//   getBudgetProducts(products, 5000)
//   →  ['Café en grano', 'Filtros V60 (paquete)', 'Café molido']
// -----------------------------------------------------------------------------
const getBudgetProducts = (products, maxPrice) => {
  return products
    .filter(p => p.price <= maxPrice)
    .map(p => p.name);
};


// -----------------------------------------------------------------------------
// Zona de prueba — NO tocar, solo mirar el resultado en la consola.
// -----------------------------------------------------------------------------
console.log('--- Fase 3 ---');
console.log('1) findProductByName("Café en grano"):');
console.log('   ', findProductByName('Café en grano'));
console.log('   findProductByName("No existe"):');
console.log('   ', findProductByName('No existe'));

console.log('2) getProductPrice(1):    ', getProductPrice(1));
console.log('   getProductPrice(999):  ', getProductPrice(999));

console.log('3) applyDiscount(products[0], 10):');
console.log('   ', applyDiscount(products[0], 10));
console.log('   (el original sigue igual?)', products[0]);

console.log('4) getBudgetProducts(products, 5000):');
console.log('   ', getBudgetProducts(products, 5000));
