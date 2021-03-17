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
    
    const validarPrecio = (precio)=>{
        if(campoVacio(precio)){
            errores.precio = 'El campo Precio no puede estar vacío';
            errorPrecio.innerText = 'El campo Precio no puede estar vacío';
        } else if (!regExPositivo.test(precio.value)){
            errores.precio = 'El Precio no puede ser 0 o negativo';
            errorPrecio.innerText = 'El Precio no puede ser 0';
        }else {
            errorPrecio.innerText = "";
            delete errores.precio;
        }
    }
    
    const validarCantidad = (cantidad)=>{
    
        if(campoVacio(cantidad)){
            errores.cantidad = 'El campo Cantidad no puede estar vacío';
            errorCantidad.innerText = 'El campo Cantidad no puede estar vacío';
        } else if(!regExEnteroPositivo.test(cantidad.value)){
            errores.cantidad = 'Solo se admiten valores enteros';
            errorCantidad.innerText = 'Solo se admiten valores enteros y positivos';
        } else {
            errorCantidad.innerText = "";
            delete errores.cantidad;
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
        }
        
    }
    
    const validarImagenes = (imagen)=>{
        console.log(imagen);
        let extensionesValidas = ['.jpg','.jpeg','.png','.gif']
        let extension = (imagen.value.substring(imagen.value.lastIndexOf("."))).toLowerCase();       
        let bandera = extensionesValidas.find(elemento=> extension==elemento)
    
        if (imagen == ""){
            console.log('sin imagen');
        } else if(bandera == undefined){
            console.log('problemas con extensión de imagenes');
            errores.imagenes = "Por favor ingresar imagenes con extension JPG, JPEG, PNG O GIF";
            errorImagen.innerText = errores.imagenes
        } else {
            console.log('pase ok imagenes');
            delete errores.imagenes
            errorImagen.innerText = errores.imagenes
        }
    }

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        
        const producto = qs('#producto');
        const errorProducto = qs('#errorProducto'); 
        validarProducto(producto)
        
        const precio = qs('#precio');
        const errorPrecio = qs('#errorPrecio');
        validarPrecio(precio)

        const cantidad = qs('#cantidad');
        const errorCantidad = qs('#errorCantidad');
        validarCantidad(cantidad);

        const detalle = qs("#detalle");
        const errorDetalle = qs('#errorDetalle');
        validarDetalle(detalle); 

        const imagen = qs("#imagen");
        const errorImagen = qs('#errorImagen')
        validarImagenes(imagen);
        

        if(Object.keys(errores).length > 0 ){
            console.log('Errores por solucionar en los siguientes campos:')
            for(const i in errores){
                console.log(`${i}`)
            }
           
        } else {
            console.log('estoy para guardar');
            formulario.submit()
        }

    })

})