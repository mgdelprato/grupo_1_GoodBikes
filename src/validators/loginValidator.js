const {check, validationResult, body} = require('express-validator');

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