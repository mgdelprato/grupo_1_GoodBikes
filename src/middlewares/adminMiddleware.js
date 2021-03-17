const path = require('path');
//Middleware que permite el acceso a las vistas de productCreate, productList y productEdit solamente a un usuario admin
function adminUser(req, res, next){
    //Valido que el usuario logeado es el admin, si es admin lo next, sino lo envío a la home
    if(req.session.userEmail != 'admin@gmail.com'){
        res.redirect('/')
    }else {
        next()
    }

}

module.exports = {adminUser};