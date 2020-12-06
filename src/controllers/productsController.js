
const path = require('path')
const fs = require('fs');
const { validationResult } = require('express-validator');

let productos = fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8');
productos = JSON.parse(productos);



let ultimoId = 0
for(let i=0; i<productos.length ; i++){
    if(ultimoId<productos[i].ID){
        ultimoId=productos[i].ID;
    }
}


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
    grabarProducto: function(req, res) {
        let error  = validationResult(req);
        if(error.isEmpty()){
            let nuevoProducto ={
                ID: ultimoId +1,
                Categoria: req.body.categoria,
                Titulo: req.body.producto,
                Marca: req.body.marca,
                Modelo: req.body.modelo,
                Detalles: req.body.detalle,
                Imagen:req.files[0].filename,
                Precio: req.body.precio,
                Cantidad: req.body.cantidad
            }
          

            productos.push(nuevoProducto);
            fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(productos,null,4))
            res.redirect('/products/productList')
        }else{
            // hay errores. Entonces...
            return res.render(path.join(__dirname,'../views/products/productCreate'), {
                errors: errors.mapped()
            })
        }
    },

    editarProducto: function(req, res) {

        let productoEditar = req.params.id;
        productoEditar = productos[productoEditar];
        console.log(productoEditar);
        res.render(path.join(__dirname, '../views/products/productEdit.ejs'),{productoEditar:productoEditar})

    },

    listarProducto: function(req, res) {
        res.render( path.join(__dirname, '../views/products/productList.ejs') )
    },
    
    borrarProducto: function(req, res) {

        let error  = validationResult(req);
        if(error.isEmpty()){
            let productoEliminar = req.params.id;
                   
                productos.pop(productoEliminar)    

                fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(productos,null,4))
                res.redirect('/products/productList')

        }else{
            return res.render(path.join(__dirname,'../views/products/productList')), {
                errors: errors.mapped()
                 }
            }
    }
    

}

module.exports = productsController