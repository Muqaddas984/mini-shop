   const Database = require("better-sqlite3");
   const db = new Database("shop.db");

   db.exec(`
     CREATE TABLE IF NOT EXISTS products (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       price REAL NOT NULL,
       description TEXT,
       image TEXT,
       category TEXT
     )
   `);

   const row = db.prepare("SELECT COUNT(*) AS total FROM products").get();

   if (row.total === 0) {
     const insert = db.prepare(
       "INSERT INTO products (name, price, description, image, category) VALUES (?, ?, ?, ?, ?)"
     );

     insert.run("Red Rose Bouquet", 2500, "12 fresh red roses wrapped in soft paper", "/images/red-roses.jpg", "Roses");
     insert.run("Pink Rose Bunch", 2400, "Soft pink roses with a gentle scent", "/images/pink-roses.jpg", "Roses");
     insert.run("White Rose Elegance", 2600, "Pure white roses for weddings and gifts", "/images/white-roses.jpg", "Roses");
     insert.run("Pink Peony Bunch", 3200, "Fluffy blush peonies, perfect for gifts", "/images/peonies.jpg", "Bouquets");
     insert.run("Tulip Garden Mix", 2200, "Colorful spring tulips in a mixed bunch", "/images/tulips.jpg", "Bouquets");
     insert.run("Spring Meadow Mix", 2800, "A fresh mix of daisies, tulips and baby's breath", "/images/spring-mix.jpg", "Bouquets");
     insert.run("Sunflower Joy", 1800, "Bright sunflowers to light up any room", "/images/sunflowers.jpg", "Sunny");
     insert.run("Yellow Daisy Basket", 1600, "Happy yellow daisies in a small basket", "/images/daisies.jpg", "Sunny");
     insert.run("White Lily Elegance", 2800, "Graceful white lilies with a sweet scent", "/images/white-lilies.jpg", "Lilies");
     insert.run("Pink Lily Delight", 3000, "Pink stargazer lilies with a rich fragrance", "/images/pink-lilies.jpg", "Lilies");
     insert.run("Lavender Dream", 1500, "Calming dried lavender bundle", "/images/lavender.jpg", "Dried");
     insert.run("Orchid Pot", 4200, "Purple orchid in a pretty ceramic pot", "/images/orchid.jpg", "Potted");

     console.log("Sample flowers added");
   }

   module.exports = db;