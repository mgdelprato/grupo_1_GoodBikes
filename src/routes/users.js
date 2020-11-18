const express = require('express');
const app = express();
const router = express.Router();
const usersController = require ('../controllers/usersController');


router.get('/login', usersController.login)
router.get('/register', usersController.registrar)
router.get('/profile', usersController.perfil)

module.exports = router;