import Database from 'better-sqlite3';

// Set up SQLite database
export const db = new Database('store.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS Product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Sell (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source TEXT NOT NULL,
    total_price REAL NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS SellProduct (
    sell_id INTEGER,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    PRIMARY KEY (sell_id, product_id),
    FOREIGN KEY (sell_id) REFERENCES Sell(id),
    FOREIGN KEY (product_id) REFERENCES Product(id)
  );
  
  INSERT INTO Product (name, price) VALUES ('Product 1', 10.0);
  INSERT INTO Product (name, price) VALUES ('Product 2', 15.0);
  INSERT INTO Product (name, price) VALUES ('Product 3', 20.0);
  INSERT INTO Product (name, price) VALUES ('Product 4', 25.0);
`);
