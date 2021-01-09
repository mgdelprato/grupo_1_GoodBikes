const path = require('path');

module.exports = {
    //Método que valida que el usuario esté logueado, si quiere acceder a alguna view (ej: profile) y no está logueado se lo envía a la view de login
    userLoggedIn: function(req, res, next){
        console.log('estoy en el middle y vengo de '+ req.url + ' y en session tengo '+ req.session.user);
        if(typeof req.session.user == 'undefined'){
            res.render(path.join(__dirname, '../views/users/login'))
        }else {
            next()    
        }
        
    },
    //Método que en caso que el usuario esté logueado y quiera entrar a login o register,se lo redirige a su perfil
    logInRegisterCase: function(req, res, next){
        if(typeof req.session.user !== 'undefined'){
            res.render(path.join(__dirname, '../views/users/profile'))
        }else {
            next()    
        }
        

    }

}
