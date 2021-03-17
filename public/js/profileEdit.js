// function qs(element) {
//     return document.querySelector(element)
// }

// let btnEditar = qs('#btnEditar');
// let nombre = qs('#nombre')
// const deshabilitar = function(){

//     console.log("deshabilito");

//     nombre.disabled=false;

// }

// btnEditar.addEventListener('click',deshabilitar())

// function qs(element) {
//     return document.querySelector(element)
// }

function qs(element){
    return document.querySelector(element)
}

let btnEditar = qs('#btnEditar')
let password = qs('#password')
let nombre = qs('#nombre')
let apellido = qs('#apellido')
let calle = qs('#calle')
let numero = qs('#numero')
let depto = qs('#depto')
let provincia = qs('#provincia')
let localidad = qs('#localidad')
let cp = qs('#cp')
let alias = qs('#alias')
let medioPago = qs('#medioPago')
let operadora = qs('#operadora')
let banco = qs('#banco')


  btnEditar.addEventListener("click", function(){


          nombre.disabled = false;
          apellido.disabled = false;
          calle.disabled = false;
          numero.disabled = false;
          depto.disabled = false;
          provincia.disabled = false;
          localidad.disabled = false;
          cp.disabled = false;
          alias.disabled = false;
          medioPago.disabled = false;
          operadora.disabled = false;
          banco.disabled = false;
      
  })