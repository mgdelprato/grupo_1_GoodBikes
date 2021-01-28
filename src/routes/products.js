const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const routeMiddleware = require('../middlewares/routeMiddleware');

/***************
 RUTAS DE PRODUCTOS
 ***************/
//Carrito de compras
router.get('/productCart', productsController.carritoCompras);

//Detalle de un producto
router.get('/productDetail', productsController.detalle_Producto);
router.get('/productDetail/:id', productsController.detalleProducto);

//Productos de una determinada categoria (Rodado, accesorios, indumentaria, etc)
router.get('/productSearch/:categoria', productsController.buscarProducto); // Trae listado de productos
router.get('/search', productsController.buscador); // Trae listado de productos


/* CARRITO */
router.get('/productCart',productsController.carritoCompras);
router.get('/productCartAdd',productsController.carritoComprasAdd);
router.post('/productCartAdd',productsController.carritoComprasAdd);
router.get('/productCartRemove',productsController.carritoComprasRemove);
router.get('/productCartRemove/:id',productsController.carritoComprasRemove);

module.exports = router;


