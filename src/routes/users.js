const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require ('../controllers/usersController');
const {check, validationResult, body } = require('express-validator');
const registerValidator = require('../validators/registerValidator')



//Multer para guardar los avatars
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/avatars'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

//Login
router.get('/login', usersController.login)
router.post('/login', [check('email').notEmpty().withMessage('Completar Email'),check('password').notEmpty().withMessage('Completar Password')],usersController.chequearLogin)

//Register
router.get('/register', usersController.registrar)
router.post('/register', upload.any(), registerValidator.checkRegister,usersController.save)

//Profile
router.get('/profile', usersController.perfil)

//Logout
router.get('/logout', usersController.logout)

module.exports = router;