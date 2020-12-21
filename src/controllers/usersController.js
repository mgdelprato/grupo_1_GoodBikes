const path = require('path')
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const {check, validationResult, body } = require('express-validator');

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
    
    
    chequearLogin: function(req,res,next)
    {
        //Si no hay errores type en el ckeck
        
        let errors = validationResult(req);

        if(errors.isEmpty()){
        //Si no hay errores de carga de formulario
        
        

            //Busca al usuario
            let BuscaUser = usuarios.find(function(usuarios) 
            {return usuarios.email == req.body.email})
            
            if(BuscaUser)
            {
            res.locals.username = BuscaUser.first_name
            res.render( path.join(__dirname, '../views/users/profile.ejs'));
            }
            else // Logueo fallido 
            {}   

            

        }
        else
        {//Si hay errores de carga, se renderiza el login compartiendo los errores
            
           return res.render( path.join(__dirname, '../views/users/login.ejs'),{errors: errors.mapped()} )
            

          
        }
        next()
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