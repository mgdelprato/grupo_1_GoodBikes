const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const usersController = require ('../controllers/usersController');



//Lista de usuarios
router.get('/users', usersController.listaUsuarios);

//Detalle de usuario
router.get('/users/:id', usersController.detalleUsuario);

//Lista de productos
router.get('/products', productsController.listaProductos);

//Detalle de producto
router.get('/products/:id', productsController.detalleProductoApi);

module.exports = router;