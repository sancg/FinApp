import db from './dbSetup';

export default function seedDatabase() {
  const products = [
    { name: 'Combo Bowl', price: 35000 },
    { name: 'Bowl Nachos', price: 12000 },
    { name: 'Burro', price: 14000 }
  ];

  const sells = [
    { source: 'Transferencia', total_price: 24000, date: new Date('2024-05-01T10:00:00') },
    { source: 'Efectivo', total_price: 14000, date: new Date('2024-05-01T15:00:00') }
  ];

  const sellProduct = [
    { sell_id: 1, product_id: 1, quantity: 2, price: 12000 },
    { sell_id: 2, product_id: 1, quantity: 1, price: 35000 }
  ];

  const insertProduct = db.prepare('INSERT INTO product (name, price) VALUES (?, ?)');
  const insertSell = db.prepare(
    'INSERT INTO sell (source, total_price, date) VALUES (?, ?, ?)'
  );
  const insertSellProduct = db.prepare(
    'INSERT INTO sellproduct (sell_id, product_id, quantity, price) VALUES (?, ?, ?, ?)'
  );

  products.forEach((prod) => {
    insertProduct.run(prod.name, prod.price);
  });

  sells.forEach((sell) => {
    insertSell.run(sell.source, sell.total_price, sell.date);
  });

  sellProduct.forEach((join) => {
    insertSellProduct.run(join.sell_id, join.product_id, join.quantity, join.price);
  });

  console.log('Database seeded successfully.');
  db.close();
}
