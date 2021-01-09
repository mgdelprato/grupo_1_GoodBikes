const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const routeMiddleware = require('../middlewares/routeMiddleware');

/***************
 RUTAS DE PRODUCTOS
 ***************/
//Carrito de compras
router.get('/productCart', routeMiddleware.userLoggedIn, productsController.carritoCompras);

//Detalle de un producto
router.get('/productDetail', productsController.detalle_Producto);
router.get('/productDetail/:id', productsController.detalleProducto);

//Productos de una determinada categoria (Rodado, accesorios, indumentaria, etc)
router.get('/productSearch/:categoria', productsController.buscarProducto); // Trae listado de productos

module.exports = router;


