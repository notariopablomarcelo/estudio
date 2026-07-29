const products = [
  { id: 1, name: 'Café en grano',            price: 4500,  stock: 12 },
  { id: 2, name: 'Molinillo manual',         price: 18000, stock: 3  },
  { id: 3, name: 'Filtros V60 (paquete)',    price: 2200,  stock: 0  },
  { id: 4, name: 'Cafetera prensa francesa', price: 24000, stock: 5  },
  { id: 5, name: 'Café Molido', price: 5000, stock: 20 }
];

const IVA = 0.21;

const inStock = (product) => product.stock > 0 && product.price <= 20000;

const withTax = ({ price, ...rest }) => ({
  ...rest,
  price,
  priceWithTax: Math.round(price * (1 + IVA)),
});

const formatLine = ({ name, priceWithTax, stock }) =>
  `${name} — $${priceWithTax} (${stock} disponibles)`;

const availableProducts = products
  .filter(inStock)
  .map(withTax)
  .sort((a, b) => a.price - b.price)
  .map(formatLine);

console.log('Productos disponibles:');
availableProducts.forEach((line) => console.log(`- ${line}`));

const totalStock = products.reduce((acum, elem) => acum + elem.stock, 0);
console.log(`Valor total de stock: $${totalStock}`);

// TODO 4: modificá la cadena de `availableProducts` para que los productos
// aparezcan ORDENADOS por precio (de menor a mayor).
//
// IMPORTANTE: el método `.sort()` MUTA el array original. Para respetar la
// regla de inmutabilidad que vimos, hacé una copia con spread ANTES de sortear:
//   [...unArray].sort(...)
//
// PISTA — sort recibe una función comparadora:
//   .sort((a, b) => a.price - b.price)   // ascendente
//   .sort((a, b) => b.price - a.price)   // descendente
//
// Pensá bien EN QUÉ PUNTO de la cadena tenés que meter el sort.
// (Después de `formatLine` no sirve — para entonces ya son strings.)
