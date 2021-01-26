
const path = require('path')
const fs = require('fs');
const db = require('../data/models')

// //Leo el json de productos y lo parseo
// let productos = fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8');
// productos = JSON.parse(productos);


let mainController = {
//Renderizo homePage
    index: function(req,  res){
        db.Product.findAll({
            where:{
                still_alive:'YES'
            }
        })
        .then(function(productos){
            res.render( path.join(__dirname, '../views/index.ejs'), {productos:productos} )
        })
    }
}
module.exports = mainController;