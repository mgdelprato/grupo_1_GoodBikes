const path = require('path')
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8');
usuarios = JSON.parse(usuarios);

let ultimoId = 0
for(let i=0; i<usuarios.length;i++){
    if(ultimoId<usuarios[i].id){
        ultimoId=usuarios[i].id;
    }
    console.log(ultimoId);
}


let usersController ={
    registrar: function(req, res) {
        res.render( path.join(__dirname, '../views/users/register.ejs') )
    },
    
    //Al ingresar al Login    
    login:function(req, res) {
        res.render( path.join(__dirname, '../views/users/login.ejs') )
    },
    
    //Al intentar loguerse
    chequearLogin: function(req,res){
       if(true)
       {res.render( path.join(__dirname, '../views/users/profile.ejs'))}
       else // Logueo fallido 
       {res.send('No pa')}
    
    }
       
    ,



    perfil: function(req, res) {
        res.render( path.join(__dirname, '../views/users/profile.ejs') )
    },
    save: function(req, res,next) {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let nuevoUsuario = {
                id: ultimoId +1,
                first_name: req.body.name,
                last_name: req.body.apellido,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 12),
                avatar: req.files[0].filename
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