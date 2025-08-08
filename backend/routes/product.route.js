import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

export default router;

// Epoint to get all products
router.get('/', getProducts);

//Endpoint to create a product
router.post('/', createProduct);

// Endpoint to update a product
router.put('/:id', updateProduct);

// Endopoint to delete a product
router.delete('/:id', deleteProduct);

