const express = require('express');
const app = express();

// Este modulo me va a permitir escribir rutas de manera correcta sin la necesidad de concatenar...
const path = require('path');

// Esta linea aclara que vamos a disponibilizar una carpeta para que sea pública para que el navegador pueda acceder...
app.use( express.static( path.join(__dirname, './public') ) )

app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname, './src/views/index.html') )
})

app.get('/login', function(req, res) {
    res.sendFile( path.join(__dirname, './src/views/users/login.html') )
})

app.get('/productCart', function(req, res) {
    res.sendFile( path.join(__dirname, './src/views/products/productCart.html') )
})
app.get('/productDetail', function(req, res) {
    res.sendFile( path.join(__dirname, './src/views/products/productDetail.html') )
})
app.get('/register', function(req, res) {
    res.sendFile( path.join(__dirname, './src/views/users/register.html') )
})

app.get('/productList', function(req, res) {
    res.sendFile( path.join(__dirname, './src/views/products/productList.html') )
})

app.get('/productCreate', function(req, res) {
    res.sendFile( path.join(__dirname, './src/views/products/productCreate.html') )
})

app.get('/productEdit', function(req, res) {
    res.sendFile( path.join(__dirname, './src/views/products/productEdit.html') )
})




app.listen(5000, function() {
    console.log('Servidor corriendo en el puerto 5000')
})