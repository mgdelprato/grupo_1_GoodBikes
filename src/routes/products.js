const express = require('express');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');
const path = require('path');

//Multer para guardar las imagenes de productos
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/products'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.producto + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

router.get('/productCart', productsController.carritoCompras);

router.get('/productDetail', productsController.detalleProducto);
// router.get('/productDetail/:id', productsController.detalleProducto); //Revisar esto a ver si está ok o directamente va el parametro

router.get('/productCreate', productsController.crearProducto);
router.post('/productCreate', upload.any(), productsController.grabarProducto); // Crea productos

router.get('/productEdit/:id', productsController.editarProducto); //analizar si hay que modificar la ruta
router.put('/productEdit/:id', productsController.actualizarProducto); //analizar si hay que modificar la ruta
router.delete('/delete/:id',productsController.borrarProducto);

router.get('/productList', productsController.listarProducto); // Trae listado de productos



module.exports = router;


