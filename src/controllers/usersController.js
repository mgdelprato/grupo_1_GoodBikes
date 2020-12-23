const path = require('path')
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const {check, validationResult, body } = require('express-validator');
const session = require('express-session')
const cookieParser = require('cookie-parser')

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
            
                if(!BuscaUser)
        
                        //Si no encuentra al usuario avisa y detiene

                            {return res.render( path.join(__dirname, '../views/users/login.ejs'),{mensaje: 'El usuario' + req.body.email + 'No se encuentra registrado'} )}
                            
                else        
                {
                        //Si encuentra al usuario chequea contraseña

                            //Prepara para chequear pass ingresada
                            let encriptada = BuscaUser.password
                            let pass_ingresada = req.body.password
                            
                    
                            if(bcryptjs.compareSync(pass_ingresada,encriptada))
                            {
                            // Statments de Contraseña Correcta. 
                                
                                //Paso email, usuario y avatar al session
                                req.session.user = BuscaUser.first_name
                                req.session.userEmail = BuscaUser.email
                                req.session.avatar = BuscaUser.avatar
                                
                                console.log(req.session.user);
                                
                                
                                if(req.body.rememberme == 'si') // ¿Tildó recordame?
                                {
                                  res.cookie('rememberme',{user: req.session.user, userEmail: req.session.userEmail,avatar: req.session.avatar},{maxAge: 86400000})
                                }

                                //Ir al home)
                                return res.redirect('/');
                            }

                            else
                            
                            {// Error en contraseña
                            req.session.destroy()
                            res.render( path.join(__dirname, '../views/users/login.ejs'),{mensaje: 'E-mail o contraseña incorrectos'})
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
        res.cookie('rememberme',{maxAge: 0}) // Eliminar la cookie
        req.session.destroy();               // Eliminar sesión
        res.redirect('/') 
    }
    }
    

module.exports = usersController