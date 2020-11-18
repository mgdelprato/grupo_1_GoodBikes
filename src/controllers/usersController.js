const path = require('path')

let usersController ={
    login:function(req, res) {
        res.render( path.join(__dirname, '../views/users/login.ejs') )
    },
    registrar: function(req, res) {
        res.render( path.join(__dirname, '../views/users/register.ejs') )
    },
    perfil: function(req, res) {
        res.render( path.join(__dirname, '../views/users/profile.ejs') )
    }
    
}

module.exports = usersController