const {check, validationResult} = require('express-validator');

//Validación que se completaron y cumplieron con los requisitos al momento de registrar un nuevo usuario
module.exports = {
    registerCheck: [
            check('name')
                .isLength({min:2})
                .withMessage('El nombre debe tener mínimo 2 caracteres'),
            check('apellido')
                .isLength({min:2})
                .withMessage('El apellido debe tener mínimo 2 caracteres'),
            check('email')
                .isEmail()
                .withMessage('Por favor ingresar un email valido'),
            check('password')
                .isLength({min:4})
                .withMessage('La contraseña debe tener mínimo 4 caracteres'),
            ]

}