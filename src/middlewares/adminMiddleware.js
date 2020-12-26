const path = require('path');

function adminUser(req, res, next){
    if(req.session.userEmail != 'admin@gmail.com'){
        res.redirect('/');
    }else {
        next()
    }

}

module.exports = {adminUser};