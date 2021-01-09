const express = require('express');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');
const path = require('path');
const adminMiddleware = require('../middlewares/adminMiddleware');

//Multer para guardar las imagenes de productos
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.producto + '-' + Date.now() + path.extname(file.originalname))
    }
})


var upload = multer({ storage: storage })
/***********
 LAS SIGUIENTES RUTAS SOLO PODRÁN SER ACCEDIDAS SI TE ENCONTRAS LOGUEADO CON USUARIO ADMIN 
************/

//Creación de un producto
router.get('/products/productCreate',adminMiddleware.adminUser, productsController.crearProducto);
router.post('/products/productCreate', upload.any(), productsController.grabarProducto); // Crea productos
//Edición de un producto
router.get('/products/productEdit/:id',adminMiddleware.adminUser, productsController.editarProducto); //analizar si hay que modificar la ruta
router.put('/products/productEdit/:id',upload.any(), productsController.actualizarProducto); //analizar si hay que modificar la ruta
//Eliminación de un producto
router.delete('/products/delete/:id',productsController.borrarProducto);
//Listado de productos
router.get('/products/productList',adminMiddleware.adminUser,productsController.listarProducto); // Trae listado de productos


module.exports = router;