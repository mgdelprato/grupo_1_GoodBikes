

/*CONTROLLER QUE TIENE LA LOGICA ASOCIADA A RECORDAR AL LOGIN Y RECORDAR UN USUARIO */
let remembermeController = {
  //Método para recordar un usuario en la web
  cookie: function(req, res, next){

    if(req.cookies.rememberme != undefined && req.session.user == undefined){
      req.session.user = req.cookies.rememberme.user;
      req.session.userEmail = req.cookies.rememberme.userEmail
      req.session.userID = req.cookies.rememberme.userID
  
      res.locals.userID = req.session.userID
      res.locals.user = req.session.user; 
      res.locals.mail = req.session.userEmail;
  
    }
    next()
  },
  session: (function(req, res, next) {
    {res.locals.user = req.session.user; 
     res.locals.mail = req.session.userEmail;
     res.locals.userID = req.session.userID;
     
    };
    next();
  })

}

module.exports = remembermeController