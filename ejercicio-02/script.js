const products = [
  { id: 1, name: 'Café en grano',            price: 4500,  stock: 12 },
  { id: 2, name: 'Molinillo manual',         price: 18000, stock: 3  },
  { id: 3, name: 'Filtros V60 (paquete)',    price: 2200,  stock: 0  },
  { id: 4, name: 'Cafetera prensa francesa', price: 24000, stock: 5  },
];

const IVA = 0.21;

const withTax = ({ price, ...rest }) => ({
  ...rest,
  price,
  priceWithTax: Math.round(price * (1 + IVA)),
});

const inStock = (product) => product.stock > 0;

const formatLine = ({ name, priceWithTax, stock }) =>
  `${name} — $${priceWithTax} (${stock} disponibles)`;

const availableProducts = products
  .filter(inStock)
  .map(withTax)
  .map(formatLine);

console.log('Productos disponibles:');
availableProducts.forEach((line) => console.log(`- ${line}`));
