   const express = require("express");
   const db = require("./database");

   const app = express();

   app.get("/", (req, res) => {
     res.json({ message: "Mini Shop server is running" });
   });

   // Get all products
   app.get("/products", (req, res) => {
     const products = db.prepare("SELECT * FROM products").all();
     res.json(products);
   });

   // Get one product by id
   app.get("/products/:id", (req, res) => {
     const product = db
       .prepare("SELECT * FROM products WHERE id = ?")
       .get(req.params.id);

     if (!product) {
       return res.status(404).json({ message: "Product not found" });
     }
     res.json(product);
   });

   app.listen(3000, () => {
     console.log("Server started on http://localhost:3000");
   });