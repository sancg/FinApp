import express from 'express';
import { ProductController } from '../controllers/productController';
import { ProductService } from '../services/productService';
import { db } from '../models/db';
const router = express.Router();
const productService = new ProductService(db);
const productController = new ProductController(productService);

router.get('/products', (req, res) => productController.getAllProducts(req, res));
router.get('/products/:id', (req, res) => productController.getProductById(req, res));
router.post('/products', (req, res) => productController.addProduct(req, res));
router.put('/products/:id', (req, res) => productController.updateProduct(req, res));
router.delete('/products/:id', (req, res) => productController.deleteProduct(req, res));

export default router;
