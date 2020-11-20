const express = require('express');
const app = express();
const router = express.Router();

const productsController = require('../controllers/productsController');


router.get('/productCart', productsController.carritoCompras);

router.get('/productDetail', productsController.detalleProducto);

router.get('/productCreate', productsController.crearProducto);

router.get('/productEdit', productsController.editarProducto);

router.get('/productList', productsController.listarProducto);

module.exports = router;


