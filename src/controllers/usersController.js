const path = require('path')
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

//Leo el JSON de usuarios y lo parseo
let usuarios = fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8');
usuarios = JSON.parse(usuarios);

//Función para obtener ID de producto autoincremental
let ultimoId = 0
for(let i=0; i<usuarios.length;i++){
    if(ultimoId<usuarios[i].id){
        ultimoId=usuarios[i].id;
    }
}

/*CONTROLLER QUE MANEJA LA LÓGICA DE USUARIOS */
let usersController ={
    //Método (asociado al GET) para renderizar la vista de registración de un usuario
    registrar: function(req, res) {
        res.render( path.join(__dirname, '../views/users/register.ejs') )
    },
    
    //Método (asociado al GET) para renderizar la vista de login de un usuario 
    login:function(req, res) {
        res.render( path.join(__dirname, '../views/users/login.ejs') )
    },
    
    //Método (asociado al POST) para realizar el logueo de un usuario
    chequearLogin: function(req,res,next)
    {
        //Si no hay errores type en el ckeck
        let errors = validationResult(req);
        if(errors.isEmpty()){
        //Si no hay errores se carga el formulario  

        //Busca al usuario por su mail
        let BuscaUser = usuarios.find(usuarios =>{return usuarios.email == req.body.email})
            
                if(!BuscaUser)
        
                        //Si no encuentra al usuario avisa y detiene

                            {return res.render( path.join(__dirname, '../views/users/login.ejs'),{mensaje: 'El usuario ' + req.body.email + ' no se encuentra registrado'} )}
                            
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
                                                                
                                
                                if(req.body.rememberme == 'si') // ¿Tildó recordame?
                                {
                                  res.cookie('rememberme',{user: req.session.user, userEmail: req.session.userEmail,avatar: req.session.avatar},{maxAge: 86400000})
                                }

                                //Ir al home
                                return res.redirect('/');
                            }

                            else
                            
                            {// Error en contraseña
                            req.session.destroy() //Por las dudas
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
//Método (asociado al GET) para obtener los datos y renderizar la vista de profile de un usuario
    perfil: 
                function(req, res) {
                //Si no esta logueado

                if (req.session.userEmail == undefined)
                    { // Kick
                        res.render(path.join(__dirname, '../views/users/login.ejs'),{mensaje: "Registro exitoso! Debes loguearte para acceder a tu perfil"})    
                    }
                else
                    { //Log exitoso
                        
                        //Trae datos del array
                        let BuscaUser = usuarios.find( function(usuarios){
                            return usuarios.email == req.session.userEmail})
                        
                        //Prepara variables locals para la vista profile
                            res.locals.profileName = BuscaUser.first_name
                            res.locals.profileLastName = BuscaUser.last_name
                            res.locals.profileEmail = BuscaUser.email
                            res.locals.profileAvatar = BuscaUser.avatar
                     
                        
                        res.render( path.join(__dirname, '../views/users/profile.ejs') )
                    }

    },
    //Método (asociado al POST) que se encarga de guardar los datos cuando se registra un nuevo usuario
    save: function(req, res,next) {
        let errors = validationResult(req);
        //Si no hay errores, recupero los datos ingresados del usuario y los guardo, luego renderizo su profile
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
            // Si hay errores, los mapeo y renderizo la vista con los errores
            return res.render( path.join(__dirname, '../views/users/register.ejs'),{errors: errors.mapped(),old:req.body})
        }
        next()
    },
    //Método (asociado al get) para cerrar la sesión de un usuario
    logout: function(req, res) {
        //Kill a todo dato y redirigimos al home

        res.cookie('rememberme',{maxAge: 0}) // Eliminar la cookie
        req.session.destroy();               // Eliminar sesión
        
        //Vaciamos las vistas
        res.locals.user = undefined; 
        res.locals.mail = undefined;

        // Por si le da back
        res.locals.profileName = undefined
        res.locals.profileLastName = undefined
        res.locals.profileEmail = undefined
        res.locals.profileAvatar = undefined

        {return res.render( path.join(__dirname, '../views/users/login.ejs'),{mensaje: 'Cerraste tu sesión. Te esperamos pronto!'} )}
        //res.redirect('/') 
    }
    }
    

module.exports = usersController