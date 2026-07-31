// -----------------------------------------------------------------------------
// Ejercicio 03 — TypeScript sobre el código de la Fase 3 anterior
//
// Tomamos el mismo código que ya funciona en JS y le agregamos TIPOS.
// Objetivo: que `npx tsc` compile sin errores y `npx ts-node fase-3.ts` corra.
//
// El editor te va a marcar en rojo TODOS los lugares donde falta tipo, porque
// el tsconfig tiene `strict: true` y `noImplicitAny: true`. Cada error es una
// pista de dónde tenés que trabajar.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// TIPO 1: definí la interface Producto
//
// Debe tener 4 propiedades: id (number), name (string), price (number), stock (number).
// Después descomentá el tipo `Producto[]` del array `products` de abajo.
// -----------------------------------------------------------------------------
interface Producto {
  id: number;
  name: string;
  price: number;
  stock: number;
}


const products : Producto[] = [
  { id: 1, name: 'Café en grano',            price: 4500,  stock: 12 },
  { id: 2, name: 'Molinillo manual',         price: 18000, stock: 3  },
  { id: 3, name: 'Filtros V60 (paquete)',    price: 2200,  stock: 0  },
  { id: 4, name: 'Cafetera prensa francesa', price: 24000, stock: 5  },
  { id: 5, name: 'Café molido',              price: 5000,  stock: 20 },
];


// -----------------------------------------------------------------------------
// TIPO 2: tipá el parámetro `name`.
// El retorno lo puede inferir TS solo, no hace falta anotarlo.
// -----------------------------------------------------------------------------
const findProductByName = (name: string) => {
  return products.find(product => product.name === name);
};


// -----------------------------------------------------------------------------
// TIPO 3: tipá el parámetro `id`.
// Igual que arriba: el retorno se infiere.
// -----------------------------------------------------------------------------
const getProductPrice = (id: number) => {
  const product = products.find(p => p.id === id);
  return product?.price ?? 0;
};


// -----------------------------------------------------------------------------
// TIPO 4: tipá `product` y `percentage`.
// PISTA — para `product` usá la interface que definiste arriba.
// -----------------------------------------------------------------------------
const applyDiscount = (product: Producto, percentage: number) => {
  return { ...product, price: Math.round(product.price * (1 - percentage/100)) };
};


// -----------------------------------------------------------------------------
// TIPO 5: tipá los dos parámetros.
// PISTA — el primer parámetro NO es un producto suelto, es un array.
// -----------------------------------------------------------------------------
const getBudgetProducts = (products: Producto[], maxPrice: number) => {
  return products
    .filter(p => p.price <= maxPrice)
    .map(p => p.name);
};


// -----------------------------------------------------------------------------
// Zona de prueba
// -----------------------------------------------------------------------------
console.log('--- Ejercicio 03: TypeScript ---');
console.log('1)', findProductByName('Café en grano'));
console.log('2)', getProductPrice(1), '/', getProductPrice(999));
console.log('3)', applyDiscount(products[0], 10));
console.log('4)', getBudgetProducts(products, 5000));
