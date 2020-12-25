const path = require('path');

function userLoggedIn(req, res, next){
    console.log('estoy en el middle y vengo de '+ req.url + ' y en session tengo '+ req.session.user);
    if(typeof req.session.user == 'undefined'){
        res.render(path.join(__dirname, '../views/users/login'))
    }else {
        next()
    }

}

module.exports = {userLoggedIn};