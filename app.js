const express = require('express');
const app = express();
const productsRouter = require('./src/routes/products');


// Este modulo me va a permitir escribir rutas de manera correcta sin la necesidad de concatenar...
const path = require('path');

// Esta linea aclara que vamos a disponibilizar una carpeta para que sea pública para que el navegador pueda acceder...
app.use( express.static( path.join(__dirname, './public') ) )


/* HOME */
app.get('/', function(req, res) {
    res.render( path.join(__dirname, './src/views/index.ejs') )
})

/*---------------------------------------------------------------------------------- */

/* USUARIOS */

app.get('/login', function(req, res) {
    res.render( path.join(__dirname, './src/views/users/login.ejs') )
})

app.get('/register', function(req, res) {
    res.render( path.join(__dirname, './src/views/users/register.ejs') )
})

/*AGREGAR VIEW DE MI CUENTA!!!!!! */

/*---------------------------------------------------------------------------------- */

/* PRODUCTS */

app.use('/products',productsRouter);



/*---------------------------------------------------------------------------------- */




app.listen(process.env.PORT || 5000, function() {
    console.log(`Servidor corriendo en el puerto 5000`);
})

app.set('view engine', 'ejs');