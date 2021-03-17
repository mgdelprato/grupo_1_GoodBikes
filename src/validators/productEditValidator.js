const {check, validationResult,body} = require('express-validator');

module.exports={
    productEditCheck:[
        check('producto')
            .isLength({min:5})
            .withMessage('El nombre del producto debe tener como mínimo 5 caracteres'),
        check('detalle')
            .isLength({min:20})
            .withMessage('El detalle del producto debe tener como mínimo 20 caracteres'),
        body('fileExtension').custom(function(value, { req }){
        console.log(`esto tiene fileExtension ${value}`);
        console.log(`esto tiene req.files.length ${req.files.length}`);
        let extensionesValidas = ['.jpg','.jpeg','.png','.gif'];
        for(let i = 0; i < req.files.length; i++){
            let extension = (req.files[i].originalname.substring(req.files[i].originalname.lastIndexOf("."))).toLowerCase();
            let bandera =  extensionesValidas.find(elemento=> extension==elemento)
            console.log(`valor bandera:${bandera}`);
            console.log(typeof(bandera));
            if(bandera != 'undefined'){
                
                return true
            }
        }
        }).withMessage('Por favor ingresar imagenes con extension JPG, JPEG, PNG O GIF')
        
    ]
}