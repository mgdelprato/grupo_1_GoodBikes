const path = require('path')
const { validationResult } = require('express-validator');
const db = require('../data/models');
const { Sequelize, sequelize } = require('../data/models');
const Op = Sequelize.Op

/* CONTROLLER QUE CONTIENE LA LÓGICA DE NEGOCIO RELACIONADA A PRODUCTOS */

let productsController = {

    //Metodo (asociado al GET de products)  para renderizar el carrito de compras
    carritoCompras: function(req, res) {

            if(req.session.cartSQLOrganized == undefined || req.session.cartSQLOrganized.length === 0) //Sin productos en el carrito
                     {res.render( path.join(__dirname, '../views/products/productCart.ejs'),{mensajito: 'Nothing here'})}
            else
                {    
                db.Product.findAll({
                    where:{
                        id: req.session.cartSQLOrganized 
                    }
               })
                //Renderizo la vista enviando los productos que pertenecen a la categroia
                .then(function(producto){
                    let itemsCart = req.session.cartSQLOrganized ;                 
                    res.render( path.join(__dirname, '../views/products/productCart.ejs'),{producto:producto,itemsCart: itemsCart})
                })
            }//cierra if
     },

    carritoComprasAdd: function(req,res) {//Suma producto al array de session
                if (req.session.cartSQLOrganized == undefined){
                    //Primer clic en agregar de la session
                    req.session.cartSQLOrganized = []
                    req.session.cartSQLOrganized.push(req.body.id_producto)
                    }
                    
                else 
                {
                //Siguientes clics en Agregar
                req.session.cartSQLOrganized.push(req.body.id_producto)
                }
                //Luego del if renderizar la vista donde estaba parado
                res.redirect('./productCart')
    },

    carritoComprasRemove: function(req, res) {
        //Suma producto al array de session
        if (req.session.cartSQLOrganized == undefined || req.session.cartSQLOrganized == []){
        //Inacción ante array vacío
        }
            
        else {
        //Quita elemento del array de session del carrito
        let indice = req.session.cartSQLOrganized.indexOf(req.params.id)
        req.session.cartSQLOrganized.splice(indice, 1);
        }          
       
        //Renderizar la vista donde estaba parado
        res.redirect('/products/productCart')
},



    SaveCart: function(req,res) {//Suma producto al array de session
    if (req.session.cartSQLOrganized == undefined){
        //Primer clic en agregar de la session
        req.session.cartSQLOrganized = []
        req.session.cartSQLOrganized.push(req.body.id_producto)
        }
        
    else 
    {
    //Siguientes clics en Agregar
    req.session.cartSQLOrganized.push(req.body.id_producto)
    }
    //Luego del if renderizar la vista donde estaba parado
    res.redirect('./productCart')
},










Buy: function(req,res) {
    
    let usernum = 11
    let payment = 9
    let mount = 10000
    let theproduct = 10
    let Q = 1


    sequelize.query(
       "INSERT INTO purchases_transactions(user_id,payment_method_id,transaction_amount) VALUES(" + usernum + "," + payment + "," + mount + ")"
        )
    //Renderizo la vista enviando los productos que pertenecen a la categroia
    .then(
        sequelize.query("INSERT INTO purchases_details(user_id,purchase_transaction_id,product_id,quantity) VALUES(" + usernum + ",(SELECT MAX(id) from purchases_transactions as ultTransaccion WHERE user_id =" + usernum + ")," + theproduct + "," + Q + ")")
        )
    .then(function(producto){
        res.redirect('../')     
    })


  
},//Cierra método Buy



























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
        let errors = validationResult(req);

        //Chequeo si no hay errores, si está OK creo un nuevo producto y lo pusheo al array de productos
        if(errors.isEmpty()){
            //Inserto un nuevo producto en la base con la info enviada en el req
            db.Product.create({
                category: req.body.categoria,
                title: req.body.producto,
                brand: req.body.marca,
                model: req.body.modelo,
                detail: req.body.detalle,
                price: req.body.precio,
                quantity: req.body.cantidad,
                img_ppal: req.files[0].filename


            })
            //Inserto imagenes dentro de la tabla de imágenes
            .then(function(producto){
                for(let i=0; i<req.files.length;i++){
                    db.ProductImage.create({
                        product_id:producto.id,
                        image_name:req.files[i].filename,
                    }).then(function(){
                            console.log("inserto imagen "+ i)
                    })

                }
                res.redirect('/admin/products/productList')
            })
        }else{
            // Si hay errores, los mapeo y muestro  la vista de creación con los errores
            return res.render(path.join(__dirname,'../views/products/productCreate'),{errors: errors.mapped()
            })
        }
    },
    //Metodo (asociado al get del admin) para renderizar la vista de edición de un producto
    editarProducto: function(req, res) {

        //Busco el producto a editar
        db.Product.findByPk(req.params.id,
            {include: [{association: "ProductsImages"}]})
        .then(function(productoEditar){
    

            //Renderizo la vista enviandole los valores del producto a editar para utilizarlos en la vista
            res.render(path.join(__dirname, '../views/products/productEdit.ejs'),{productoEditar:productoEditar})
        })

    },
    // Método (asociado al PUT del admin) para guardar la edición realizada sobre un producto
    actualizarProducto: function(req,res){
        let errors  = validationResult(req);

        //Si no hay errores guardo los valores del producto editado, y renderizo la vista de listado de productos
        if(errors.isEmpty()){
            //Actualizo en la base todos los campos segun lo enviado en el request
            db.Product.update({
                category: req.body.categoria,
                title: req.body.producto,
                brand: req.body.marca,
                model: req.body.modelo,
                detail: req.body.detalle,
                price: req.body.precio,
                quantity: req.body.cantidad,
                img_ppal: req.files[0].filename

            },{
                where:{
                    id:req.params.id
                }
                //Hago el linkeo con la tabla de imagenes
                ,include: [{association: "ProductsImages"}]
            })
                //Recorro las imagenes y las actualizo
            .then(function(producto){
            for(let i=0; i<req.files.length;i++){
                db.ProductImage.update({
                        product_id_fk:producto.id,
                        image_name:req.files[i].filename,
                        },{
                            where:{
                                id:req.params.id
                            }
                        }).then(function(){
                        console.log("inserto imagen")
                    })
                }
            res.redirect('/admin/products/productList')
            })
    }else{

        
        // Si hay errores, los mapeo y muestro la la vista de creación con los errores
        return (db.Product.findByPk(req.params.id,
            {include: [{association: "ProductsImages"}]})
        .then(function(productoEditar){
    

            //Renderizo la vista enviandole los valores del producto a editar para utilizarlos en la vista
            res.render(path.join(__dirname, '../views/products/productEdit.ejs'),{productoEditar:productoEditar})
        }))
    }
},
    //Método (asociado a GET en el admin) para renderizar la vista de listado de productos
    listarProducto: function(req, res) {
        //Busco en la base todos los productos "activos" (still_alive='YES)
        db.Product.findAll({
            where:{
                still_alive:'YES'
            }
        })
        .then(function(productos){

            res.render( path.join(__dirname, '../views/products/productList.ejs'),{productos:productos})
        })

    },
   //Método (asociado al DELETE) para borrar un producto en particular
    borrarProducto: function(req, res) {

        let errors  = validationResult(req);
       //Chequeo que no hay errores, si está OK, recupero el producto que hay que eliminiar y lo filtro del array
        if(errors.isEmpty()){
        
            //Actualizo el still_alive para realizar un soft-delete
                db.Product.update({
                    still_alive:'NO'
                },{
                    where:{
                        id:req.params.id
                    }
                })
                .then(function(){
                    //Renderizo la vista sin el producto "eliminado"
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
       db.Product.findByPk(req.params.id, 
            {include: [{association: "ProductsImages"}]})
        .then(function(producto){
            console.log(producto);
            req.session.producto = producto
            res.render( path.join(__dirname, '../views/products/productDetail.ejs'),{producto:producto})
        })
    },
    //Método (asociado al GET de products) para renderizar la vista de los productos de una categoria en particular
    buscarProducto: function(req,res){
        //Busco en la base todos los productos activos que pertenecen a la categoria seleccionada
        db.Product.findAll({
            where:{
                category:req.params.categoria,
                still_alive:'YES'
            }
        })
        //Renderizo la vista enviando los productos que pertenecen a la categroia
        .then(function(productosCategorizados){

            res.render( path.join(__dirname, '../views/products/productSearch.ejs'),{productosCategorizados:productosCategorizados})
        })

    },
    //Método (asociado al GET de products) para buscar en la base los productos ingresados en el buscador
    buscador: function(req,res){
        //Recupero lo ingresado en el search
       productoBuscado=req.query.search
       //Busco en la base filtrando lo que ingresa el usuario y teniendo en cuenta los productos activos
        db.Product.findAll({
            where:{
                title:{[Op.like]: `%${productoBuscado}%`},
                [Op.and]:{still_alive:'YES'}
            }   
            
        })
        //Renderizo la vista enviando los resultados
        .then(function(resultados){
            res.render( path.join(__dirname, '../views/products/search.ejs'),{resultados:resultados,productoBuscado:productoBuscado})
        })
    },

    listaProductos: function(req,res){
        db.Product.findAll({attributes:['id', 'category', 'title','brand', 'model', 'detail', 'price', 'quantity', 'img_ppal'],
            where: {
                still_alive: 'YES'
            }
        }).then(function(products){

            if(products.length != 0){
                let countByCategory = {
                    Rodados: 0,
                    Indumentaria: 0,
                    Accesorios: 0,
                    Equipamiento: 0,
                    Taller:0
                }
                for (let i = 0; i < products.length; i++) {
                    products[i].dataValues.detailURL = 'localhost:5000/api/products/'+products[i].id
                    switch (products[i].dataValues.category) {
                        case 'Rodados':
                            countByCategory.Rodados++ 
                            break;
                    
                        case 'Indumentaria':
                            countByCategory.Indumentaria++ 
                            break;
                    
                        case 'Accesorios':
                            countByCategory.Accesorios++ 
                            break;
                    
                        case 'Equipamiento':
                            countByCategory.Equipamiento++ 
                            break;
                    
                        case 'Taller':
                            countByCategory.Taller++ 
                            break;
                    
                        default:
                            break;
                    }
                }

                res.status(200).json({

                    count: products.length,
                    countByCategory: countByCategory,
                    products: products
                })
            }else{
                return res.status(204)
            }
        }).catch(function(error){
            return res.json(error)
        })
    },
    detalleProductoApi: function(req,res){
        
        db.Product.findByPk(req.params.id, 
            {include: [{association: "ProductsImages"}]})
        .then(function(producto){
            let detalle = producto
            detalle.img_ppal = 'localhost:5000/images/products/'+ detalle.img_ppal;

            res.status(200).json({
                producto:producto
            })
        })
        .catch(function(error){
            res.status(400).json({
                error:error,
                msg:"Producto no encontrado",
                ok: false
            })
        })
    }
}




module.exports = productsController