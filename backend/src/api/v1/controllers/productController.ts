import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

export class ProductController {
  constructor(private productService: ProductService) {}

  getAllProducts(req: Request, res: Response): void {
    const products = this.productService.getAllProducts();
    res.json(products);
  }

  getProductById(req: Request, res: Response): void {
    const id = parseInt(req.params.id, 10);
    const product = this.productService.getProductById(id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json(product);
  }

  addProduct(req: Request, res: Response): void {
    const { name, price } = req.body;
    const product = this.productService.addProduct(name, price);
    res.json(product);
  }

  updateProduct(req: Request, res: Response): void {
    const id = parseInt(req.params.id, 10);
    const { name, price } = req.body;
    const product = this.productService.updateProduct(id, name, price);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json(product);
  }

  deleteProduct(req: Request, res: Response): void {
    const id = parseInt(req.params.id, 10);
    this.productService.deleteProduct(id);
    res.json({ message: 'Product deleted successfully' });
  }
}
