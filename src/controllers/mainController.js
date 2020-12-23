
const path = require('path')
const fs = require('fs');
const { validationResult } = require('express-validator');

let productos = fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf-8');
productos = JSON.parse(productos);

let mainController = {
    index: function(req,  res){
         
        res.render( path.join(__dirname, '../views/index.ejs'), {productos:productos} )
        console.log('Cookies: ', req.cookies)
        }
}

module.exports=mainController;