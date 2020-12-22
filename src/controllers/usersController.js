const path = require('path')
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const {check, validationResult, body } = require('express-validator');
const session = require('express-session')


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

        if(errors.isEmpty())
        {
        //Si no hay errores de carga de formulario  

        //Busca al usuario por su mail
        let BuscaUser = usuarios.find(usuarios =>{return usuarios.email == req.body.email})
            
                //Si no encuentra al usuario avisa y detiene
                if(!BuscaUser)
                            {return res.render( path.join(__dirname, '../views/users/login.ejs'),{mensaje: req.body.email} )}
                            
                else        {
                    //Si encuentra al usuario chequea contraseña
                            let encriptada = BuscaUser.password
                            let pass_ingresada = req.body.password
                            
                    
                            if(bcryptjs.compareSync(pass_ingresada,encriptada))
                            {
                            //Contraseña chequeada.  Carga first_name y redirige a profile
                            //res.locals.username = BuscaUser.first_name
                            req.session.user = BuscaUser.first_name
                            console.log(req.session.user);                     

                            return res.redirect('/');
                            }
                            else
                            
                            {// Error en contraseña
                            
                            return res.redirect( path.join(__dirname, '../views/users/login.ejs'),{mensaje: 'E-mail o contraseña incorrectos'})
                            
                            }
                    }                
                }
        
        else
        {//Si hay errores de carga, se renderiza el login compartiendo los errores
           return res.render( path.join(__dirname, '../views/users/login.ejs'),{errors: errors.mapped()} )
     
        }
        next()
    } ,

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
    logout: function(req, res) {
        //Quitamos valores al session y redirigimos al home
        req.session.destroy();
        res.redirect('/') 
    }
    }
    

module.exports = usersController