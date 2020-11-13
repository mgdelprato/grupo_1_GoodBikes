const express = require('express');
const app = express();


// Este modulo me va a permitir escribir rutas de manera correcta sin la necesidad de concatenar...
const path = require('path');

// Esta linea aclara que vamos a disponibilizar una carpeta para que sea pública para que el navegador pueda acceder...
app.use( express.static( path.join(__dirname, './public') ) )

app.get('/', function(req, res) {
    res.render( path.join(__dirname, './src/views/index.ejs') )
})

app.get('/login', function(req, res) {
    res.render( path.join(__dirname, './src/views/users/login.ejs') )
})

app.get('/productCart', function(req, res) {
    res.render( path.join(__dirname, './src/views/products/productCart.ejs') )
})
app.get('/productDetail', function(req, res) {
    res.render( path.join(__dirname, './src/views/products/productDetail.ejs') )
})
app.get('/register', function(req, res) {
    res.render( path.join(__dirname, './src/views/users/register.ejs') )
})

app.get('/productList', function(req, res) {
    res.render( path.join(__dirname, './src/views/products/productList.ejs') )
})

app.get('/productCreate', function(req, res) {
    res.render( path.join(__dirname, './src/views/products/productCreate.ejs') )
})

app.get('/productEdit', function(req, res) {
    res.render( path.join(__dirname, './src/views/products/productEdit.ejs') )
})




app.listen(5000, function() {
    console.log('Servidor corriendo en el puerto 5000')
})

app.set('view engine', 'ejs');