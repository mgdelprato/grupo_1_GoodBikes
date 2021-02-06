
window.addEventListener("load",function(){
let formulario = document.querySelector("form.register"); //selecciono formulario

formulario.addEventListener("submit",function(event){
    event.preventDefault();
        let listaErrores = document.querySelector("div.errores ul")
        listaErrores.innerHTML = "<li>" + "" +"</li>"
        let errores = [];
    let nombre = document.querySelector("#name")

    if(nombre.value == ""){
        errores.push("El nombre no puede ser vacio")
    }else if(nombre.value.length <= 2){
        errores.push("El nombre debe tener mas de 2 caracteres")
    }

    let email=document.querySelector("#email");
        
    let regexMail= new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
    
    if(email.value == ""){//validación de cambio vacío

        errores.push("El campo email debe estar completo")
    }else if(regexMail.test(email.value) == false){
  
        errores.push("Por favor ingrese un mail valido")
    }

    let password = document.querySelector("#password")
    let regexPass = new RegExp('(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')

    if(password.value.length == 0){
        errores.push("El campo de contraseña debe estar completo")
            }else if(password.value.length > 8){
                 if(regexPass.test(password.value)){
                    console.log("contraseña correcta");
                 }else{
                    errores.push("La contraseña debe contener Mayúsculas, un número y un carácter especial")
                }
            }else{
                 errores.push("El longitud del password debe tener al menos 8 caracteres")
    }

        let avatar = document.querySelector("#avatar")
        let extensionesValidas = ['.jpg','.jpeg','.png','.gif']
        let extension = (avatar.value.substring(avatar.value.lastIndexOf("."))).toLowerCase();       
    
        let bandera = extensionesValidas.find(elemento=> extension==elemento)

        if(bandera == undefined){
            errores.push("Por favor ingresar imagenes con extension JPG, JPG, PNG O GIF")
        }

        if(errores.length > 0 ){
            let listaErrores = document.querySelector("div.errores ul")
            for(let i =0; i < errores.length; i++){
                listaErrores.innerHTML += "<li>" + errores[i] +"</li>"
                errores[i]=""
            }
           
        }else{
            formulario.submit();
        }
    })
})