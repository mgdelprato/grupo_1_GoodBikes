const express = require('express');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');
const path = require('path');
const routeMiddleware = require('../middlewares/routeMiddleware');

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

router.get('/productCart', routeMiddleware.userLoggedIn, productsController.carritoCompras);

router.get('/productDetail', productsController.detalle_Producto);
router.get('/productDetail/:id', productsController.detalleProducto);

router.get('/productSearch/:categoria', productsController.buscarProducto); // Trae listado de productos




module.exports = router;


