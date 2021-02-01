const {check, validationResult,body} = require('express-validator');

module.exports={
    productCreateCheck:[
        check('producto')
            .isLength({min:5})
            .withMessage('El nombre del producto debe tener como mínimo 5 caracteres'),
        check('detalle')
            .isLength({min:20})
            .withMessage('El detalle del producto debe tener como mínimo 20 caracteres'),
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