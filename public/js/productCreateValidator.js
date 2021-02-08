function qs(element) {
    return document.querySelector(element)
}

function campoVacio(element) {
    return (element.value.length == 0)
}

window.addEventListener('load', () => {
let form = qs('#formularioProductCreate');

const regExEnteroPositivo = /^[+]?[0-9]\d*$/;
const regExPositivo = /^\d*\.?\d*$/


let inputProducto = qs('#producto');
    inputPrecio = qs('#precio'),
    inputCantidad = qs('#cantidad'),
    inputDetalle = qs('#detalle'),
    inputImagen = qs('#imagen');

let errores = {};

const errorProducto = qs('#errorProducto'),
      errorPrecio = qs('#errorPrecio'),
      errorCantidad = qs('#errorCantidad'),
      errorDetalle = qs('#errorDetalle'),
      errorImagen = qs('#errorImagen');

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
        errorDetalle.innerText = errores.detalle;
    }else if(detalle.value.length <= 20){
        errores.detalle = "El detalle del producto debe tener al menos de 20 caracteres";
        errorDetalle.innerText = errores.detalle;   
    } else {
        errorDetalle.innerText = "";
        delete errores.detalle;
        console.log('pase ok detalle');
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
        errores.imagenes = "Por favor ingresar imagenes con extension JPG, JPG, PNG O GIF";
        errorImagen.innerText = errores.imagenes
    } else {
        console.log('pase ok imagenes');
        errorImagen.innerText = ""
        delete errores.imagenes 
    }
}



inputProducto.addEventListener('blur', ()=>{
    validarProducto(inputProducto);    
})
inputPrecio.addEventListener('blur', ()=>{
    validarPrecio(inputPrecio);    
})
inputCantidad.addEventListener('blur', ()=>{
    validarCantidad(inputCantidad);
})
inputDetalle.addEventListener('blur', ()=>{
    validarDetalle(inputDetalle)
})
inputImagen.addEventListener('blur', ()=>{
    validarImagenes(inputImagen)
})


form.addEventListener('submit', (event)=>{
    event.preventDefault();

    validarProducto(inputProducto);
    validarPrecio(inputPrecio);
    validarCantidad(inputCantidad);
    validarDetalle(inputDetalle);
    validarImagenes(inputImagen);

    if(Object.keys(errores).length > 0){
        console.log('Errores por solucionar en los siguientes campos:')
        for(const i in errores){
            console.log(`${i}`)
        }
    }else{
        form.submit()
    }

})

})