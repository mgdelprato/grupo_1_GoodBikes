function qs(element) {
    return document.querySelector(element)
}

function campoVacio(element) {
    return (element.value.length == 0)
}

window.addEventListener("load",function(){
    let formulario = qs("form.productEdit");
    
    let errores = {};

    const regExEnteroPositivo = /^[+]?[0-9]\d*$/;
    const regExPositivo = /^\d*\.?\d*$/
    
    const validarProducto = (producto) => {
        if(campoVacio(producto)){
            errores.producto = 'El campo Producto no puede estar vacío';
            errorProducto.innerText = errores.producto;
        } else if(producto.value.length < 5){
            errores.producto = 'El campo producto debe tener mas de 5 caractéres';
            errorProducto.innerText = 'El campo producto debe tener mas de 5 caractéres';
        } else {
            errorProducto.innerText = "";
            delete errores.producto;
            console.log('pase ok producto');
        }
    }   
    
    const validarDetalle = (detalle) => {
        if(campoVacio(detalle)){
            errores.detalle = "El detalle del producto no puede ser vacio";
            errorDetalle.innerText = errore.detalle;
        }else if(detalle.value.length <= 20){
            errores.detalle = "El detalle del producto debe tener al menos de 20 caracteres";
            erroresDetalle.innerText = errores.detalle;   
        } else {
            errorDetalle.innerText = "";
            delete errores.detalle;
            console.log('pase ok detalle');
        }
        
    }
    
    const validarImagenes = (imagen)=>{
        console.log(imagen.value[0]);
        let extensionesValidas = ['.jpg','.jpeg','.png','.gif']
        let extension = (imagen.value.substring(imagen.value.lastIndexOf("."))).toLowerCase();       
        let bandera = extensionesValidas.find(elemento=> extension==elemento)
    
        if (imagen == ""){
            console.log('sin imagen');
        } else if(bandera == undefined){
            console.log('problemas con extensión de imagenes');
            errores.imagenes = "Por favor ingresar imagenes con extension JPG, JPG, PNG O GIF";
            errorImagen.innerText = errores.imagenes
        } else {
            console.log('pase ok imagenes');
            errores.imagenes = ""
            errorImagen.innerText = errores.imagenes
        }
    }

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        
        const producto = qs('#producto');
        const errorProducto = qs('#errorProducto'); 
        validarProducto(producto)
        

        const detalle = qs("#detalle");
        const errorDetalle = qs('#errorDetalle');
        validarDetalle(detalle); 

        
        const imagen = qs("#imagen");
        const errorImagen = qs('#errorImagen')
        //validarImagenes(imagen);
        

        if(Object.keys(errores).length > 0 ){
            let listaErrores = document.querySelector("div.errores ul")
            console.log('tengo errores sin solucionar');
            console.log(errores);
            for(let i =0; i < errores.length; i++){
                listaErrores.innerHTML += "<li>" + errores[i] +"</li>"
            }
           
        } else {
            console.log('estoy para guardar');
            formulario.submit()
        }

    })





})