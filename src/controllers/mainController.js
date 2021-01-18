
const path = require('path')
const fs = require('fs');

//Leo el json de productos y lo parseo
let productos = fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8');
productos = JSON.parse(productos);


let mainController = {
//Renderizo homePage
    index: function(req,  res){
        //  db.productos.findAll()
        //  .then(productos){
        //     //aca va el render
        // }
        res.render( path.join(__dirname, '../views/index.ejs'), {productos:productos} )
        }
}

module.exports = mainController;