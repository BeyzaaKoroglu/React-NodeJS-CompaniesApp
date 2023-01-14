const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(authMiddleware, productController.getAllProducts);
router.route('/').post(authMiddleware, productController.createProduct);
router.route('/:id').get(authMiddleware, productController.getProductById);
router.route('/:id').put(authMiddleware, productController.updateProduct);
router.route('/:id').delete(authMiddleware, productController.deleteProduct);

module.exports = router;
