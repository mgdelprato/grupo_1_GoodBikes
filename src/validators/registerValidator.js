const {check, validationResult,body} = require('express-validator');
const path = require('path')
//Validación que se completaron y cumplieron con los requisitos al momento de registrar un nuevo usuario
let regex = new RegExp('(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')

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
            // check('password')
            //     .isLength({min:8})
            //     .withMessage('La contraseña debe tener mínimo 8 caracteres'),
             body('password').custom(function(value){
                    if(regex.test(value)){
                        return true
                    }
                }).withMessage('La constraseña debe contener 8 caracteres(letras mayúsculas, minúsculas, un número, un carácter especial)'),
            body('fileExtension').custom(function(value){
                let extensionesValidas = ['.jpg','.jpeg','.png','.gif']
               let bandera =  extensionesValidas.find(elemento=> value==elemento)
               console.log(bandera);
               console.log(typeof(bandera));
                if(bandera != undefined){
                    return true
                }
            }).withMessage('Por favor ingresar imagenes con extension JPG, JPG, PNG O GIF')
    ]
            
}