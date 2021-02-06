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
let inputPrecio = qs('#precio');
let inputCantidad = qs('#cantidad');

let errores = {};

const errorProducto = qs('#errorProducto'),
      errorPrecio = qs('#errorPrecio'),
      errorCantidad = qs('#errorCantidad'),
      errorDetalle = qs('#errorDetalle');

inputProducto.addEventListener('blur', ()=>{
    
    if(campoVacio(inputProducto)){
        console.log('El campo Producto no puede estar vacío');
        errores.producto = 'El campo Producto no puede estar vacío';
        errorProducto.innerText = errores.producto;
    } else if(inputProducto.value.length < 5){
        console.log('El campo producto debe tener mas de 5 caractéres');
        errores.producto = 'El campo producto debe tener mas de 5 caractéres';
        errorProducto.innerText = 'El campo producto debe tener mas de 5 caractéres';
    } else {
        errorProducto.innerText = "";
    }
})

inputPrecio.addEventListener('blur', ()=>{
    if(campoVacio(inputPrecio)){
        console.log('El campo precio no puede estar vacío');
        errores.precio = 'El campo precio no puede estar vacío';
        errorPrecio.innerText = 'El campo precio no puede estar vacío';
    } else if (!regExPositivo.test(inputPrecio.value)){
        console.log('El precio no puede ser 0');
        errores.precio = 'El precio no puede ser 0 o negativo';
        errorPrecio.innerText = 'El precio no puede ser 0';
    }else {
        errorPrecio.innerText = "";
    }
    
})
inputCantidad.addEventListener('blur', ()=>{
    if(campoVacio(inputCantidad)){
        console.log('El campo Cantidad no puede estar vacío');
        errores.cantidad = 'El campo Cantidad no puede estar vacío';
        errorCantidad.innerText = 'El campo Cantidad no puede estar vacío';
    } else if(!regExEnteroPositivo.test(inputCantidad.value)){
        console.log('Solo se admiten valores enteros');
        errores.cantidad = 'Solo se admiten valores enteros';
        errorCantidad.innerText = 'Solo se admiten valores enteros y positivos';
    } else {
        errorCantidad.innerText = "";
    }
    
})
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    if(campoVacio(inputProducto)){
        errores.producto = 'El campo Producto no puede estar vacío';
        errorProducto.innerText = errores.producto;

    } else if(inputProducto.value.length < 5){
        errores.producto = 'El campo producto debe tener mas de 5 caractéres';
        errorProducto.innerText = 'El campo producto debe tener mas de 5 caractéres';

    }

    if(campoVacio(inputPrecio)){
        errores.precio = 'El campo precio no puede estar vacío';
        errorPrecio.innerText = 'El campo precio no puede estar vacío';
    } else if (!regExPositivo.test(inputPrecio.value)){
        errores.precio = 'El precio no puede ser 0';
        errorPrecio.innerText = 'El precio no puede ser 0';
    }

    if(campoVacio(inputCantidad)){
        errores.cantidad = 'El campo Cantidad no puede estar vacío';
        errorCantidad.innerText = 'El campo Cantidad no puede estar vacío';
    } else if(!regExEnteroPositivo.test(inputCantidad.value)){
        errores.cantidad = 'Solo se admiten valores enteros y positivos';
        errorCantidad.innerText = 'Solo se admiten valores enteros y positivos';
    }


if(Object.keys(errores).length > 0){
    console.log(errores)

}else{
    form.submit()
}

})

})
