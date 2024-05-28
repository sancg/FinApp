import { Database } from 'better-sqlite3';
import { Product } from '../utils/types';

export class ProductService {
  constructor(private db: Database) {}

  getAllProducts(): Product[] {
    const sql = 'SELECT * FROM Product';
    return this.db.prepare(sql).all() as Product[];
  }

  getProductById(id: number): Product | undefined {
    const sql = 'SELECT * FROM Product WHERE id = ?';
    return this.db.prepare(sql).get(id) as Product | undefined;
  }

  addProduct(name: string, price: number): Product {
    const sql = 'INSERT INTO Product (name, price) VALUES (?, ?)';
    const { lastInsertRowid } = this.db.prepare(sql).run(name, price);
    return { id: lastInsertRowid as number, name, price };
  }

  updateProduct(id: number, name: string, price: number): Product | undefined {
    const sql = 'UPDATE Product SET name = ?, price = ? WHERE id = ?';
    const changes = this.db.prepare(sql).run(name, price, id).changes;
    if (changes === 0) return;
    return { id, name, price };
  }

  deleteProduct(id: number): void {
    const sql = 'DELETE FROM Product WHERE id = ?';
    this.db.prepare(sql).run(id);
  }
}
