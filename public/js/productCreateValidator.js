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


inputProducto.addEventListener('blur', ()=>{
    validarProducto(inputProducto);    
})
inputPrecio.addEventListener('blur', ()=>{
    validarPrecio(inputPrecio);    
})
inputCantidad.addEventListener('blur', ()=>{
    validarCantidad(inputCantidad);
})



form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    validarProducto(inputProducto);
    validarPrecio(inputPrecio);
    validarCantidad(inputCantidad);

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
