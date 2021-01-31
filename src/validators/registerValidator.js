const {check, validationResult,body} = require('express-validator');
const path = require('path')
//Validación que se completaron y cumplieron con los requisitos al momento de registrar un nuevo usuario

module.exports = {
    avatar: console.log('avatar'),
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
                .isLength({min:8})
                .withMessage('La contraseña debe tener mínimo 8 caracteres'),
            body('fileExtension').custom(function(value){
                let extensionesValidas = ['.jpg','.jpeg','.png','.gif']
               let bandera =  extensionesValidas.find(elemento=> value==elemento)
                if(typeof(bandera) == 'undefined'){
                    return false
                }
            }).withMessage('Por favor ingresar imagenes con extension JPG, JPG, PNG O GIF')
    ]
            
}