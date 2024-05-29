-- Create the Product table
CREATE TABLE
    IF NOT EXISTS Product (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL
    );

-- Create the Sell table with a date column
CREATE TABLE
    IF NOT EXISTS Sell (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        source TEXT NOT NULL,
        total_price REAL NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP
    );

-- Create the SellProduct join table
CREATE TABLE
    IF NOT EXISTS SellProduct (
        sell_id INTEGER,
        product_id INTEGER,
        quantity INTEGER NOT NULL,
        price REAL NOT NULL,
        PRIMARY KEY (sell_id, product_id),
        FOREIGN KEY (sell_id) REFERENCES Sell (id),
        FOREIGN KEY (product_id) REFERENCES Product (id)
    );

-- Insert sample data
-- INSERT INTO
--     Product (name, price)
-- VALUES
--     ('Product 1', 10.0);
-- INSERT INTO
--     Product (name, price)
-- VALUES
--     ('Product 2', 15.0);
-- INSERT INTO
--     Product (name, price)
-- VALUES
--     ('Product 3', 20.0);
-- -- Insert Sell sample data
-- INSERT INTO
--     Sell (source, total_price, date)
-- VALUES
--     ('Transferencia', 50.0, '2023-05-01T10:00:00'),
--     ('Rappi', 75.0, '2023-05-05T15:30:00'),
--     ('Efectivo', 30.0, '2023-05-07T09:45:00');
-- -- Insert Sell -> Product joins
-- INSERT INTO
--     SellProduct (sell_id, product_id, quantity, price)
-- VALUES
--     (1, 1, 2, 20.0),
--     (1, 2, 1, 30.0),
--     (2, 2, 3, 45.0),
--     (3, 3, 1, 30.0);