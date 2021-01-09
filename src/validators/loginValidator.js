const {check, validationResult} = require('express-validator');

/*Validación que se completó el mail/password en el logueo de un usuario */
module.exports = {
    loginCheck:
    [
        check('email')
            .notEmpty()
            .withMessage('Completar Email'),
        check('password')
            .notEmpty()
            .withMessage('Completar Password')
    ]      
}