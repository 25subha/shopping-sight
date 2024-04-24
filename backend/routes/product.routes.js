const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller");

router.post("/products", productController.createProduct);

router.get("/products",productController.allProducts);

router.put("/products/:id",productController.UpdatedProduct);

router.delete("/products/:id", productController.deletProduct);

router.get("/products/:id",productController.singleProducts)

module.exports = router;

