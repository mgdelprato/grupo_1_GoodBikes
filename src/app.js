const express = require('express');
const app = express();

// Este modulo me va a permitir escribir rutas de manera correcta sin la necesidad de concatenar...
const path = require('path');

// Esta linea aclara que vamos a disponibilizar una carpeta para que sea pública para que el navegador pueda acceder...
app.use( express.static( path.join(__dirname, './public') ) )

app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname, './views/home.html') )
})

app.get('/contacto', function(req, res) {
    res.sendFile( path.join(__dirname, './views/contacto.html') )
})


app.listen(3000, function() {
    console.log('Servidor corriendo en el puerto 3000')
})