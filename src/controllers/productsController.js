
const path = require('path')

let productsController = {

    carritoCompras: function(req, res) {
                 res.render( path.join(__dirname, '../views/products/productCart.ejs') )
                },

    detalleProducto: function(req, res) {
        res.render( path.join(__dirname, '../views/products/productDetail.ejs') )
    },

    crearProducto: function(req, res) {
        res.render( path.join(__dirname, '../views/products/productCreate.ejs') )
    },

    editarProducto: function(req, res) {
        res.render( path.join(__dirname, '../views/products/productEdit.ejs') )
    },

    listarProducto: function(req, res) {
        res.render( path.join(__dirname, '../views/products/productList.ejs') )
    }
    

}

module.exports = productsController