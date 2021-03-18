const path = require('path')
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const db = require('../data/models');


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
    chequearLogin: function(req,res)
    {//Si no hay errores type en el check
        let errors = validationResult(req);
        if(errors.isEmpty()){
        //Si no hay errores se carga el formulario  
        //Busca al usuario por su mail
        db.User.findOne({
                where:{
                    email:req.body.email
                }
        })
        .then(function(BuscaUser){
            if(!BuscaUser){
                return res.render( path.join(__dirname, '../views/users/login.ejs'),{mensaje: 'El usuario ' + req.body.email + ' no se encuentra registrado'})
            }else{//Si encuentra al usuario chequea contraseña
                //Prepara para chequear pass ingresada
                let encriptada = BuscaUser.password
                let pass_ingresada = req.body.password

                console.log(bcryptjs.compareSync(pass_ingresada,encriptada));
                if(bcryptjs.compareSync(pass_ingresada,encriptada)){
                    // Statments de Contraseña Correcta. 
                    //Paso email, usuario y avatar al session
                    req.session.user = BuscaUser.first_name
                    req.session.userEmail = BuscaUser.email
                    req.session.avatar = BuscaUser.avatar
                    req.session.userID = BuscaUser.id

                    
                    if(req.body.rememberme == 'si') // ¿Tildó recordame?
                    {
                        res.cookie('rememberme',{user: req.session.user, userEmail: req.session.userEmail,avatar: req.session.avatar, userID: req.session.userID},{maxAge: 86400000})
                    }
                    //Ir al home logueado
                
                    if(req.session.cartSQLOrganized != undefined)
                    {return res.redirect('/products/ProductCart')} //Si esta comprando, al carrito
                    else
                    {return res.redirect('/');}//Sino al home
                    
                
                }else{// Error en contraseña
                            req.session.destroy() //Por las dudas
                            res.render( path.join(__dirname, '../views/users/login.ejs'),{mensaje: 'E-mail o contraseña incorrectos'})
                }
            }
        })
                             
        }else{//Si hay errores de carga, se renderiza el login compartiendo los errores
           return res.render( path.join(__dirname, '../views/users/login.ejs'),{errors: errors.mapped()} )
        }
    } ,
//Método (asociado al GET) para obtener los datos y renderizar la vista de profile de un usuario
perfil: async function(req, res){
                //Si no esta logueado
                if (req.session.userEmail == undefined)
                    { // Kick
                        res.render(path.join(__dirname, '../views/users/login.ejs'),{mensaje: "Registro exitoso! Debes loguearte para acceder a tu perfil"})    
                    }
                else
                    { //Log exitoso
                        
                        let BuscaUser = await  db.User.findOne({where:{email:req.session.userEmail},include: [{association: "Addresses"},{association:"PaymentMethod"},{association:"PurchaseDetails"}]})
                        let compras = BuscaUser.PurchaseDetails.map((e)=> e.get({plain:true}))
                        let productos =[]

                        for(let i = 0; i<compras.length; i++){
                            productos.push(await db.Product.findOne({where:{id:BuscaUser.PurchaseDetails[i].product_id}}))
                        }
                        productos=productos.map((e)=>e.get({plain:true}))
                        
                        return res.render(path.join(__dirname,'../views/users/profile.ejs'),{BuscaUser:BuscaUser,productos:productos})
                    }
    
    },
    save: function(req, res) {
        let errors = validationResult(req);
        //Si no hay errores, recupero los datos ingresados del usuario y los guardo, luego renderizo su profile
        if(errors.isEmpty()){
  
             db.User.findOne({where:{email:req.body.email}})
            .then(function(emailExistente){
          
                
                if(emailExistente == null){
                  
                    
                    db.User.create({
                        first_name:req.body.name,
                        last_name:req.body.apellido,
                        email:req.body.email,
                        password: bcryptjs.hashSync(req.body.password, 12),
                        avatar: req.files[0].filename,
                        Addresses:[{
                            street: '',
                            street_number:'',
                            street_locality:'',
                            street_apartment:'',
                            street_postal_code:''
                        }],
                        PaymentMethod:[{
                            alias:'',
                            brand_card:'',
                            number_card:'',
                            bank:''
                        }]
        
                    }, {
                        include: [
                            {association: 'Addresses'},
                        {association: 'PaymentMethod'}
                    ]
                    })
                    .then(function(usuario){
         
                       res.render(path.join(__dirname, '../views/users/login.ejs'));
                    })
                }else{
                 
                    return res.render( path.join(__dirname, '../views/users/register.ejs'),{mensaje: 'El email ingresado ya se encuentra registrado'})
                     }
            })
                

        } else {
            // Si hay errores, los mapeo y renderizo la vista con los errores
            return res.render( path.join(__dirname, '../views/users/register.ejs'),{errors: errors.mapped(),old:req.body})
        }
    },
    //Método (asociado al get) para cerrar la sesión de un usuario
    logout: function(req, res){
        //Kill a todo dato y redirigimos al home

        res.cookie('rememberme',{maxAge: 0}) // Eliminar la cookie
        req.session.destroy();               // Eliminar sesión
        
   
        

        {return res.render( path.join(__dirname, '../views/users/login.ejs'),{mensaje: 'Cerraste tu sesión. Te esperamos pronto!'} )}
        
        
    },
    editProfile: function(req,res){
        
        console.log(req.body);
        db.User.update({
            first_name:req.body.nombre,
            last_name:req.body.apellido
             

        },
     
            {
            where:{
                email:req.session.userEmail}
                ,include: [{association: "Addresses"},{association:"PaymentMethod"},{association:"PurchaseDetails"}
            ]
        })
        .then(function(usuario){
            console.log("jfklasjklfasjfsajklfjkasjkfasjjlk");
            console.log(usuario[0]);

            db.Address.update({
                street: req.body.calle,
                street_number: req.body.numero,
                street_apartment:req.body.depto,
                street_state: req.body.provincia,
                street_locality: req.body.localidad,
                street_postal_code: req.body.cp             
            },{
                where:
                {
                    user_id:req.session.userID
                }
            })
            .then(function(direccion){
                db.PaymentMethod.update({
                    alias: req.body.alias,
                    brand_card: req.body.operadora,
                    number_card: req.body.medioPago,
                    bank: req.body.banco
                },{
                    where:{
                        user_id:req.session.userID
                        
                    }
                })
                .then(function(medioPago){
                    console.log("medio pago exitoso");
                })
            })
        res.cookie('rememberme',{maxAge: 0}) // Eliminar la cookie
        req.session.destroy();               // Eliminar sesión
        res.render( path.join(__dirname, '../views/users/login.ejs'))})

    },
    listaUsuarios: function (req,res){
        
            db.User.findAll({attributes:['id','first_name','last_name','email'],
                where:{
                    still_alive:'YES'
                }
            })
            .then(function(users){ 
                if(users.length != 0){
                    for(let i = 0; i<users.length;i++){
                        users[i].dataValues.detail="localhost:5000/api/users/" + users[i].id
                        console.log(users[i])
                    }

                    res.status(200).json({
                        count:users.length,
                        users:users
                    })
                }else{
                    return res.status(204)
                }
                
            })
            .catch(function(error){
                return res.json(error)
            })
      
    },
    detalleUsuario: function (req,res){
        let detalle = {}
        console.log(req.params.id)

        db.User.findOne({where:{id:req.params.id}})
        .then(function(usuario){
            console.log(usuario);

               res.status(200).json({
   
                   detalle:{
                       id: usuario.id,
                       first_name: usuario.first_name,
                       last_name: usuario.last_name,
                       email: usuario.email,
                       avatar: "localhost:5000/images/users/avatars/" + usuario.avatar
                   }
               })
           
        })
        .catch(function(error){
            res.status(400).json({
                error:error,
                msg:"Usuario no encontrado",
                ok: false
                })
        })
        
    }
}
    

module.exports = usersController