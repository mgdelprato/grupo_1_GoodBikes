const path = require('path')

let usersController ={
    login:function(req, res) {
        res.render( path.join(__dirname, '../views/users/login.ejs') )
    },
    registrar: function(req, res) {
        res.render( path.join(__dirname, '../views/users/register.ejs') )
    }
}

module.exports = usersController