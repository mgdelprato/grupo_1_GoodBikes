

function userLoggedIn(req, res, next){
    console.log(`estoy en el middleware ` + req.session);
    if(typeof req.session == 'undefined'){
        res.redirect('/login')
    }else {
        next()
    }

}

module.exports = {userLoggedIn};