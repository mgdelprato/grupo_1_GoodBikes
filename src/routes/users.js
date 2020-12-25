const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require ('../controllers/usersController');
const {check, validationResult, body } = require('express-validator');
const loginValidator = require('../validators/loginValidator');
const registerValidator = require('../validators/registerValidator');



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

//Login
router.get('/login', usersController.login)
router.post('/login', loginValidator.loginCheck, usersController.chequearLogin)

//Register
router.get('/register', usersController.registrar)
router.post('/register', upload.any(), registerValidator.registerCheck,usersController.save)

//Profile
router.get('/profile', usersController.perfil)

//Logout
router.get('/logout', usersController.logout)

module.exports = router;