const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');
const multer = require('multer');
const path = require('path');
const {check, validationResult, body } = require('express-validator');



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
router.post('/login', [check('email').notEmpty(),check('password').notEmpty()],usersController.chequearLogin)

//Register
router.get('/register', usersController.registrar)
router.post('/register', upload.any(),usersController.save)

//Profile
router.get('/profile', usersController.perfil)

module.exports = router;