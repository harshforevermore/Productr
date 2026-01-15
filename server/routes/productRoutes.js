import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  togglePublish
} from '../controllers/productController.js';

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id/toggle-publish', togglePublish);

export default router;