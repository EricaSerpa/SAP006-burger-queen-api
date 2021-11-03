const { Router } = require('express');
const {
  getProducts, createProducts, deleteProducts, updateProducts, getProductsById,
} = require('../controller/productsController');

const router = Router();

// aqui vai as requisições
router.get('/products', getProducts); // RETORNA TODOS OS PRODUTOS//
router.get('/products/:productId', getProductsById); // RETORNA OS DADOS DE UM PRODUTO//
router.post('/products', createProducts); // INSERE UM PRODUTO//
router.put('/products/:productId', updateProducts);
router.delete('/products/:productId', deleteProducts); // EXCLUI UM PRODUTO //

module.exports = router;
