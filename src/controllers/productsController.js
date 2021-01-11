const path = require('path')
const fs = require('fs');
const { validationResult } = require('express-validator');
let db = require('../data/models')


//Leo JSON de productos y lo parseo
let productos = fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8');
productos = JSON.parse(productos);



//Función para obtener ID de producto autoincremental
let ultimoId = 0
for(let i=0; i<productos.length ; i++){
    if(ultimoId<productos[i].ID){
        ultimoId=productos[i].ID;
    }
}

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
        let arrayImagen =[];
     
        //Función para poder insertar más de una imágen en la creación de un producto
        const insertarImagen  = ()=>{
            for(let i=0; i<req.files.length; i++){
                arrayImagen.push(req.files[i].filename)
            }
        }
        insertarImagen();
        
        //Chequeo si no hay errores, si está OK creo un nuevo producto y lo pusheo al array de productos
        if(error.isEmpty()){
          
            // db.Product.create({
            //     category: req.body.categoria,
            //     title: req.body.producto,
            //     brand: req.body.marca,
            //     model: req.body.modelo,
            //     detail: req.body.detalle,
            //     price: req.body.precio,
            //     quantity: req.body.cantidad,
            //     //Imagen: arrayImagen
            //     offert:null,
            //     has_price:null,
            //     discount:null,
            //     still_alive:null
            // })
            let nuevoProducto ={
                ID: ultimoId + 1,
                Categoria: req.body.categoria,
                Titulo: req.body.producto,
                Marca: req.body.marca,
                Modelo: req.body.modelo,
                Detalles: req.body.detalle,
                Precio: req.body.precio,
                Cantidad: req.body.cantidad,
                Imagen: arrayImagen
            }

            productos.push(nuevoProducto);
            fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(productos,null,4))
            // .then(function(){
            //   res.redirect('/admin/products/productList')  
            // })
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
        let productoEditar = req.params.id;
        let posicionArrayProductos
        for(let i=0; i<productos.length;i++){
            if(productoEditar == productos[i].ID){
                
                posicionArrayProductos = i 

            } 
        }
  
        productoEditar = productos[posicionArrayProductos];
        //Renderizo la vista enviandole los valores del producto a editar para utilizarlos en la vista
        res.render(path.join(__dirname, '../views/products/productEdit.ejs'),{productoEditar:productoEditar})

    },
    // Método (asociado al PUT del admin) para guardar la edición realizada sobre un producto
    actualizarProducto: function(req,res){
        let productoEditar = parseInt(req.params.id); 
        let error  = validationResult(req);
        let arrayImagen =[];
     
        //Función para cargar mas de una imágen al producto
        const insertarImagen  = ()=>{
            for(let i=0; i<req.files.length; i++){
                arrayImagen.push(req.files[i].filename)
         
            }
        }
        insertarImagen();    
        //Si no hay errores guardo los valores del producto editado, y renderizo la vista de listado de productos
        if(error.isEmpty()){
        for (let i=0; i<productos.length;i++){
            if(productoEditar==productos[i].ID){
                productos[i] = {
                    ID: productoEditar,
                    Categoria: req.body.categoria,
                    Titulo: req.body.producto,
                    Marca: req.body.marca,
                    Modelo: req.body.modelo,
                    Detalles: req.body.detalle,
                    Imagen:arrayImagen,
                    Precio: req.body.precio,
                    Cantidad: req.body.cantidad 

                }
              
            }
        }
           

            fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(productos,null,4))
            res.render(path.join(__dirname,'../views/products/productList'), {productos:productos} )
        }else{
            // Si hay errores, los mapeo y renderizo la vista de edición d eproducto  mostrando los errores
            return res.render(path.join(__dirname,'../views/products/productEdit/:id'), {
                errors: errors.mapped()
            })
        }
    },
    //Método (asociado a GET en el admin) para renderizar la vista de listado de productos
    listarProducto: function(req, res) {
        
        res.render( path.join(__dirname, '../views/products/productList.ejs'),{productos:productos} )
        
    },
   //Método (asociado al DELETE) para borrar un producto en particular 
    borrarProducto: function(req, res) {

        let error  = validationResult(req);
       //Chequeo que no hay errores, si está OK, recupero el producto que hay que eliminiar y lo filtro del array
        if(error.isEmpty()){
            let productoEliminar = req.params.id;
                
                productos = productos.filter(productos=>productos.ID!=productoEliminar)   
               

                fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(productos,null,4))
                res.redirect('/admin/products/productList')

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
        //Obtengo la categoria
        let categoria = req.params.categoria
        //Obtengo los productos que pertenecen a la categoria y renderizo la vista con esos productos 
        productosCategorizados = productos.filter(productos=>productos.Categoria==categoria)
        res.render( path.join(__dirname, '../views/products/productSearch.ejs'),{productosCategorizados:productosCategorizados})
    }

}

module.exports = productsController