   const Database = require("better-sqlite3");
   const db = new Database("shop.db");

   // Create the products table (if it does not exist yet)
   db.exec(`
     CREATE TABLE IF NOT EXISTS products (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       price REAL NOT NULL,
       description TEXT,
       image TEXT
     )
   `);

   // Add sample flowers only if the table is empty
   const row = db.prepare("SELECT COUNT(*) AS total FROM products").get();

   if (row.total === 0) {
     const insert = db.prepare(
       "INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)"
     );

     insert.run("Red Rose Bouquet", 2500, "12 fresh red roses wrapped in soft paper", "https://placehold.co/400x400/E63946/FFFFFF?text=Red+Roses");
     insert.run("Pink Peony Bunch", 3200, "Fluffy blush peonies, perfect for gifts", "https://placehold.co/400x400/F4A6C0/FFFFFF?text=Pink+Peonies");
     insert.run("Sunflower Joy", 1800, "Bright sunflowers to light up any room", "https://placehold.co/400x400/F9C74F/444444?text=Sunflowers");
     insert.run("White Lily Elegance", 2800, "Graceful white lilies with a sweet scent", "https://placehold.co/400x400/F1EDE4/444444?text=White+Lilies");
     insert.run("Lavender Dream", 1500, "Calming dried lavender bundle", "https://placehold.co/400x400/B8A1E3/FFFFFF?text=Lavender");
     insert.run("Tulip Garden Mix", 2200, "Colorful spring tulips in a mixed bunch", "https://placehold.co/400x400/F28482/FFFFFF?text=Tulips");

     console.log("Sample flowers added");
   }

   module.exports = db;