const path = require('path');

module.exports = {

    userLoggedIn: function(req, res, next){
        console.log('estoy en el middle y vengo de '+ req.url + ' y en session tengo '+ req.session.user);
        if(typeof req.session.user == 'undefined'){
            res.render(path.join(__dirname, '../views/users/login'))
        }else {
            next()    
        }
        
    },
    logInRegisterCase: function(req, res, next){
        if(typeof req.session.user !== 'undefined'){
            res.render(path.join(__dirname, '../views/users/profile'))
        }else {
            next()    
        }
        

    }

}
