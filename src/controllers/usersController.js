const path = require('path')
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8');
usuarios = JSON.parse(usuarios)

let usersController ={
    login:function(req, res) {
        res.render( path.join(__dirname, '../views/users/login.ejs') )
    },
    registrar: function(req, res) {
        res.render( path.join(__dirname, '../views/users/register.ejs') )
    },
    perfil: function(req, res) {
        res.render( path.join(__dirname, '../views/users/profile.ejs') )
    },
    save: function(req, res) {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            console.log(req.body);
            let nuevoUsuario = {
                id: usuarios.length +1,
                first_name: req.body.name,
                last_name: req.body.apellido,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 12),
                avatar: req.body.avatar
            }
            usuarios.push(nuevoUsuario)
            fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(usuarios,null,4))
            res.redirect('/users/profile');

        } else {
            // hay errores. Entonces...
            return res.render(path.join(__dirname,'../views/users/register'), {
                errors: errors.mapped()
            })
        }
    },
    }
    

module.exports = usersController