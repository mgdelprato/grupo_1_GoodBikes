const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require ('../controllers/usersController');
const loginValidator = require('../validators/loginValidator');
const registerValidator = require('../validators/registerValidator');
const routeMiddleware = require('../middlewares/routeMiddleware');


//Multer para guardar los avatars
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/users/avatars'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })


/*********
RUTAS ASOCIADAS A USUARIOS
***********/

//Login
router.get('/login', routeMiddleware.logInRegisterCase, usersController.login)
router.post('/login', loginValidator.loginCheck, usersController.chequearLogin)

//Register
router.get('/register', routeMiddleware.logInRegisterCase, usersController.registrar)
router.post('/register', upload.any(), registerValidator.registerCheck,usersController.save)

//Profile
router.get('/profile', routeMiddleware.userLoggedIn, usersController.perfil)

//Logout
router.get('/logout', usersController.logout)

module.exports = router;