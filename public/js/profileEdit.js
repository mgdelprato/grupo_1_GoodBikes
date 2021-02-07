function qs(element) {
    return document.querySelector(element)
}

let btnEditar = qs('#btnEditar');
let nombre = qs('#nombre')
const deshabilitar = function(){
    console.log("deshabilito");

    nombre.disable=true;

}

btnEditar.addEventListener('click',deshabilitar())
