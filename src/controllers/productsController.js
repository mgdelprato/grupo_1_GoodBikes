const path = require('path')
const fs = require('fs');
const { validationResult } = require('express-validator');
let db = require('../data/models')



/* CONTROLLER QUE CONTIENE LA LÓGICA DE NEGOCIO RELACIONADA A PRODUCTOS */

let productsController = {
    //Metodo (asociado al GET de products)  para renderizar el carrito de compras
    carritoCompras: function(req, res) {
                 res.render( path.join(__dirname, '../views/products/productCart.ejs') )
                },
    //Metodo (asociado al GET de products) para renderizar la vista del detalle de un producto
    detalle_Producto: function(req, res) {
        res.render( path.join(__dirname, '../views/products/productDetail.ejs') )
    },
    //Metodo (asociado al GET del admin) para renderizar la vista de creación de un producto
    crearProducto: function(req, res) {
        res.render( path.join(__dirname, '../views/products/productCreate.ejs') )
    },
    //Metodo (asociado al POST en el admin) para crear un nuevo producto
    grabarProducto: function(req, res) {
        let error  = validationResult(req);
        
        //Chequeo si no hay errores, si está OK creo un nuevo producto y lo pusheo al array de productos
        if(error.isEmpty()){
          
            db.Product.create({
                category: req.body.categoria,
                title: req.body.producto,
                brand: req.body.marca,
                model: req.body.modelo,
                detail: req.body.detalle,
                price: req.body.precio,
                quantity: req.body.cantidad,

            })

                .then(function(producto){
                    for(let i=0; i<req.files.length;i++){

                        
                        db.ProductImage.create({
                            product_id_fk:producto.id,
                            image_name:req.files[i].filename
                            
                        })
                        //REVISAR SI NO HAY QUE PONER UN .THEN
                        .then(function(imagen){
                            console.log("inserto " + imagen)
                        })
                        res.redirect('/admin/products/productList')                    
                }
            })
        }else{
            // Si hay errores, los mapeo y muestro la la vista de creación con los errores
            return res.render(path.join(__dirname,'../views/products/productCreate'), {
                errors: errors.mapped()
            })
        }
    },
    //Metodo (asociado al get del admin) para renderizar la vista de edición de un producto
    editarProducto: function(req, res) {

        //Busco el producto a editar
        db.Product.findByPk(req.params.id)
        .then(function(productoEditar){
            
            //Renderizo la vista enviandole los valores del producto a editar para utilizarlos en la vista
            res.render(path.join(__dirname, '../views/products/productEdit.ejs'),{productoEditar:productoEditar})
        })
  
        //*******************PENDIENTE MANEJO DE IMAGENES*****************
    },
    // Método (asociado al PUT del admin) para guardar la edición realizada sobre un producto
    actualizarProducto: function(req,res){
        let error  = validationResult(req);
      
        //Si no hay errores guardo los valores del producto editado, y renderizo la vista de listado de productos
        if(error.isEmpty()){
       
            db.Product.update({
                category: req.body.categoria,
                title: req.body.producto,
                brand: req.body.marca,
                model: req.body.modelo,
                detail: req.body.detalle,
                price: req.body.precio,
                quantity: req.body.cantidad,
            },{
                where:{
                    id:req.params.id
                }
            })
            .then(function(){
                
                res.redirect('/admin/products/productList')
            })
       //*******************************PENDIENTE ANALISIS UPDATE IMAGENES******************************
        }else{
            // Si hay errores, los mapeo y renderizo la vista de edición d eproducto  mostrando los errores
            return res.render(path.join(__dirname,'../views/products/productEdit/:id'), {
                errors: errors.mapped()
            })
        }
    },
    //Método (asociado a GET en el admin) para renderizar la vista de listado de productos
    listarProducto: function(req, res) {
        
        db.Product.findAll({
            where:{
                still_alive:'YES'
            }
        })
        .then(function(productos){

            res.render( path.join(__dirname, '../views/products/productList.ejs'),{productos:productos} )
        })
        
    },
   //Método (asociado al DELETE) para borrar un producto en particular 
    borrarProducto: function(req, res) {

        let error  = validationResult(req);
       //Chequeo que no hay errores, si está OK, recupero el producto que hay que eliminiar y lo filtro del array
        if(error.isEmpty()){
            let productoEliminar = req.params.id;
                db.Product.update({
                    still_alive:'NO'
                },{
                    where:{
                        id:req.params.id
                    }
                })
                .then(function(){

                    res.redirect('/admin/products/productList')
                })

        }else{
            //Si hay errores, los mapeo y renderizo la vista de listado de productos
            return res.render(path.join(__dirname,'../views/products/productList')), {
                errors: errors.mapped()
                 }
            }
    },
    //Método (asociado al GET de products) para renderizar la vista de un producto en particular
    detalleProducto: function(req,res){
       
        return res.render( path.join(__dirname, '../views/products/productDetail.ejs'), { producto : productos.find(productos => productos.ID == req.params.id) } )
    },
    //Método (asociado al GET de products) para renderizar la vista de los productos de una categoria en particular
    buscarProducto: function(req,res){

        db.Product.findAll({
            where:{
                category:req.params.categoria
            }
        })
        .then(function(productosCategorizados){
            
            res.render( path.join(__dirname, '../views/products/productSearch.ejs'),{productosCategorizados:productosCategorizados})
        })
 
    }

}

module.exports = productsController